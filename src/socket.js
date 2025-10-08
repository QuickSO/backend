const moment = require("moment");

const io = require("socket.io")(strapi.server.httpServer, {
  cors: {
    origin: "*",
  },
  secure: true,
  reconnect: true,
  rejectUnauthorized: false,
});

const initSocket = (strapi) => {
  io.on("connection", function (socket) {
    io.emit("socket-status", "OK");

    socket.on("join", async (room) => {
      socket.join(room);
    });

    socket.on("read", async (message) => {
      try {
        await strapi.entityService.update(
          "api::chat-message.chat-message",
          message?.id,
          {
            data: {
              is_read: true,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("send-message", async (data) => {
      try {
        const newMessage = await strapi.entityService.create(
          "api::chat-message.chat-message",
          {
            data: {
              ...data?.message,
              sent_at: moment().format("YYYY-MM-DD HH:mm:ss"),
            },
            populate: ["attachment", "sender.photo"],
          }
        );

        io.in(data?.roomId).emit("new-message", {
          message: newMessage,
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
};

module.exports = { io, initSocket };
