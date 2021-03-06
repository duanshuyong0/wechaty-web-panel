const { WechatyPlugin, Wechaty, Message } = require("wechaty");
const onScan = require("./handlers/on-scan");
const onLogin = require("./handlers/on-login");
const onLogout = require("./handlers/on-logout");
const onFriend = require("./handlers/on-friend");
const onRoomjoin = require("./handlers/on-roomjoin");
const onMessage = require("./handlers/on-message");
const onReady = require("./handlers/on-ready");
const onHeartbeat = require("./handlers/on-heartbeat");
const onError = require("./handlers/on-error");
const onRoomtopic = require("./handlers/on-roomtopic");
const onRoomleave = require("./handlers/on-roomleave");
module.exports = function WechatyWebPanelPlugin(config = {}) {
  return function (bot) {
    bot.on("scan", onScan);
    bot.on("login", onLogin);
    bot.on("logout", onLogout);
    bot.on("friendship", onFriend);
    bot.on("room-join", onRoomjoin);
    bot.on("room-topic", onRoomtopic);
    bot.on("room-leave", onRoomleave);
    bot.on("message", onMessage);
    bot.on("ready", onReady);
    bot.on("heartbeat", onHeartbeat);
    bot.on("error", onError);
  };
};
