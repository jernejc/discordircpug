// "{$keyName}" => "variableValue"
// nickname: discord nickname
// displayUsername: nickname with wrapped colors
// text: the (IRC-formatted) message content
// discordChannel: Discord channel (e.g. #general)
// ircChannel: IRC channel (e.g. #irc)
// attachmentURL: the URL of the attachment (only applicable in formatURLAttachment)

export function getCTFPugCommands() {
  return [{
    value: '.addirc',
    text: '.addplayer {$nickname}'
  },{
    value: '.removeirc',
    text: '.delplayer {$nickname}'
  },{
    value: '.listirc',
    text: '.list'
  }];
};