var moduleName = {};

moduleName.eventsHandled = {
    "ready": false,
    "debug": false,
    "message": false,
    "warn": false,
    "messageDeleted": false,
    "messageUpdated": false,
    "disconnected": false,
    "error": false,
    "raw": false,
    "serverCreated": false,
    "serverDeleted": false,
    "serverUpdated": false,
    "channelCreated": false,
    "channelDeleted": false,
    "channelUpdated": false,
    "serverRoleCreated": false,
    "serverRoleDeleted": false,
    "serverRoleUpdated": false,
    "serverNewMember": false,
    "serverMemberRemoved": false,
    "serverMemberUpdated": false,
    "presence": false,
    "userTypingStarted": false,
    "userTypingStopped": false,
    "userBanned": false,
    "userUnbanned": false,
    "noteUpdated": false,
    "voiceJoin": false,
    "voiceSwitch": false,
    "voiceLeave": false,
    "voiceStateUpdate": false,
    "voiceSpeaking": false
};

moduleName.events = {
    "ready": function () {},
    "debug": function (message) {},
    "message": function (message) {},
    "warn": function (message) {},
    "messageDeleted": function (message, channel) {},
    "messageUpdated": function (oldMessage, newMessage) {},
    "disconnected": function () {},
    "error": function (error) {},
    "raw": function (rawData) {},
    "serverCreated": function (server) {},
    "serverDeleted": function (server) {},
    "serverUpdated": function (oldServer, newServer) {},
    "channelCreated": function (channel) {},
    "channelDeleted": function (channel) {},
    "channelUpdated": function (oldChannel, newChannel) {},
    "serverRoleCreated": function (role) {},
    "serverRoleDeleted": function (role) {},
    "serverRoleUpdated": function (oldRole, newRole) {},
    "serverNewMember": function (server, user) {},
    "serverMemberRemoved": function (server, user) {},
    "serverMemberUpdated": function (server, newUser, oldUser) {},
    "presence": function (oldUser, newUser) {},
    "userTypingStarted": function (user, channel) {},
    "userTypingStopped": function (user, channel) {},
    "userBanned": function (user, server) {},
    "userUnbanned": function (user, server) {},
    "noteUpdated": function (user, oldNote) {},
    "voiceJoin": function (voiceChannel, user) {},
    "voiceSwitch": function (oldVoiceChannel, newVoiceChannel, user) {},
    "voiceLeave": function (voiceChannel, user) {},
    "voiceStateUpdate": function (voiceChannel, user, oldVoiceProperties, newVoiceProperties) {},
    "voiceSpeaking": function (voiceChannel, user) {}
};

module.exports = moduleName;