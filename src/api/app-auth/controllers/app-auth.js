const axios       = require("axios");
const { isEmpty } = require("lodash");

module.exports = ({ strapi }) => ({
  async login(ctx) {
    try {
      // Get data from body
      const data = ctx?.request?.body;

      // Get User from the username 
      const entry = await strapi.db.query("api::app-user.app-user").findOne({
        where: {
          username: data?.username,
          is_deleted: false,
        },
        populate: {
          partner: true,
          app_roles: true,
        },
      });

      // if this user exists
      if (entry) {
        const appSettings = await strapi.db
          .query("api::application-setting.application-setting")
          .findOne({});

        // Only allow one account login per user
        //if (!appSettings?.allows_concurrent_logins) {
        if (false) { // RUCHIT's PATCH. Do Not Touch for now. Patch applied on 17 June 2024 at 2:50pm
          if (
            entry?.client_uid !== null &&
            entry?.client_uid !== "" &&
            entry?.client_uid !== data?.client_uid
          ) {
            return (ctx.body = {
              success: false,
              message: "Only one user can log in to this account at a time!",
            });
          }
        }

        const response = await axios.post(process.env.API_AUTH_URL, {
          identifier: entry?.uid,
          password: data?.password,
        });

        if (response?.data) {
          if (!appSettings?.allows_concurrent_logins) {
            await strapi.entityService.update(
              "api::app-user.app-user",
              entry?.id,
              {
                data: {
                  client_uid: data?.client_uid,
                },
              },
            );
          }
            // Re-fetch the updated user data
        const updatedEntry = await strapi.db.query("api::app-user.app-user").findOne({
          where: {
            id: entry?.id,
          },
          populate: {
            partner: true,
            app_roles: true,
          },
        });

          if (!isEmpty(data?.location)) {
            let dataToSave = {
              uid: data?.location?.uid,
              latitude: data?.location?.latitude,
              longitude: data?.location?.longitude,
              is_valid_location: false,
            };

            if (data?.location?.hasOwnProperty("location")) {
              dataToSave["location"] = data?.location?.location;
              dataToSave["is_valid_location"] = true;
            }

            const employee = await strapi.db
              .query("api::employee.employee")
              .findOne({
                where: {
                  uid: entry?.uid,
                },
              });

            if (!isEmpty(employee)) {
              dataToSave["employee"] = employee?.id;
            }

            await strapi.entityService.create(
              "api::location-check-in.location-check-in",
              {
                data: dataToSave,
              },
            );
          }

          return (ctx.body = {
            success: true,
            message: "Login successfully!",
            data: {
              jwt: response?.data?.jwt,
              user: updatedEntry,
            },
          });
        } else {
          throw new Error();
        }
      } else {
        return (ctx.body = {
          success: false,
          message: "User not found!",
        });
      }
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Login unsuccessfully!",
      });
    }
  },
  async logOut(ctx) {
    try {
      const data = ctx?.request?.body;

      const entry = await strapi.db.query("api::app-user.app-user").findOne({
        where: {
          uid: data?.uid,
          is_deleted: false,
        },
      });

      const response = await strapi.entityService.update(
        "api::app-user.app-user",
        entry?.id,
        {
          data: {
            client_uid: null,
          },
        },
      );

      if (response?.data) {
        return (ctx.body = {
          success: true,
          message: "Log out successfully!",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      return (ctx.body = {
        success: false,
        message: "Log out unsuccessfully!",
      });
    }
  },
});
