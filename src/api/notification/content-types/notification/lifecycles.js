const { io } = require("../../../../socket");

module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    io.emit("notification", {
      result,
      params,
    });
  },
};
