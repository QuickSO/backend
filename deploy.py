import os
import subprocess

# Constants
POSTGRESQL_USER = "quickso"
POSTGRESQL_PASSWORD = "QuickSoCMS123.$"
POSTGRESQL_DB = "quicksocms"
STRAPI_PROJECT_DIR = "/home/ubuntu/quickso-backend"
SUPERVISOR_CONFIG = "/etc/supervisor/conf.d/strapi.conf"

def run_command(command):
    try:
        result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(result.stdout.decode())
        if result.stderr:
            print(result.stderr.decode())
    except subprocess.CalledProcessError as e:
        print(f"Error executing command '{command}': {e}")
        raise

def install_postgresql():
    print("Installing PostgreSQL...")
    run_command("sudo apt-get update")
    run_command("sudo apt-get install -y wget ca-certificates")
    run_command("wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -")
    run_command('sudo sh -c \'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list\'')
    run_command("sudo apt-get update")
    run_command("sudo apt-get install -y postgresql postgresql-contrib")

def setup_postgresql():
    print("Setting up PostgreSQL...")

    try:
        run_command(f"sudo -u postgres psql -c \"SELECT 1 FROM pg_roles WHERE rolname='{POSTGRESQL_USER}'\"")
        print(f"User {POSTGRESQL_USER} already exists.")
    except subprocess.CalledProcessError:
        try:
            run_command(f"sudo -u postgres psql -c \"CREATE USER {POSTGRESQL_USER} WITH PASSWORD '{POSTGRESQL_PASSWORD}';\"")
        except subprocess.CalledProcessError as e:
            print(f"Error creating user {POSTGRESQL_USER}: {e}")
            return

    try:
        run_command(f"sudo -u postgres psql -c \"ALTER USER {POSTGRESQL_USER} WITH SUPERUSER;\"")
    except subprocess.CalledProcessError as e:
        print(f"Error granting superuser to {POSTGRESQL_USER}: {e}")

    try:
        run_command(f"sudo -u postgres psql -c \"CREATE DATABASE {POSTGRESQL_DB} OWNER {POSTGRESQL_USER};\"")
    except subprocess.CalledProcessError as e:
        print(f"Database {POSTGRESQL_DB} already exists or error creating it: {e}")

    try:
        run_command(f"sudo -u postgres psql -c \"ALTER USER {POSTGRESQL_USER} CREATEDB;\"")
    except subprocess.CalledProcessError as e:
        print(f"Error granting CREATEDB to {POSTGRESQL_USER}: {e}")

    try:
        run_command(f"sudo -u postgres psql -c \"DROP USER postgres;\"")
    except subprocess.CalledProcessError:
        print("Could not drop the postgres user. It may own system objects or be in use.")

    run_command("sudo systemctl enable postgresql")
    run_command("sudo systemctl start postgresql")

def install_node():
    print("Installing Node.js and npm...")
    run_command("curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -")
    run_command("sudo apt-get install -y nodejs")
    run_command("sudo npm install -g yarn")

def setup_supervisor():
    print("Setting up Supervisor...")
    supervisor_config_content = f"""
    [program:strapi]
    directory={STRAPI_PROJECT_DIR}
    command=yarn start
    autostart=true
    autorestart=true
    stderr_logfile=/var/log/strapi.err.log
    stdout_logfile=/var/log/strapi.out.log
    user=ubuntu
    environment=NODE_ENV="production"
    """
    with open(SUPERVISOR_CONFIG, "w") as config_file:
        config_file.write(supervisor_config_content)
    run_command("sudo supervisorctl reread")
    run_command("sudo supervisorctl update")

def setup_strapi():
    print("Setting up Strapi...")
    os.chdir(STRAPI_PROJECT_DIR)
    try:
        run_command("yarn install")
    except subprocess.CalledProcessError as e:
        print(f"Error installing npm packages: {e}")
        return
    try:
        run_command("yarn build")
    except subprocess.CalledProcessError as e:
        print(f"Error building Strapi: {e}")
        return

def start_strapi():
    print("Starting Strapi...")
    run_command("sudo supervisorctl start strapi")

def main():
    install_postgresql()
    setup_postgresql()
    install_node()

    setup_strapi()
    
    setup_supervisor()
    start_strapi()
    print("Deployment completed successfully.")

if __name__ == "__main__":
    main()
