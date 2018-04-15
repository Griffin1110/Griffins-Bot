 //sends all the guilds and the id's of whatever guild the bot is in
 client.guilds.map(m => m.name + "(" + m.id)

  //sends an invite of the guild specified in the id section, must have invite perms
  client.guilds.get("ID OF GUILD").channels.find(c => c.permissionsFor(c.guild.me).has("CREATE_INSTANT_INVITE")).createInvite({
     maxUses: 1
   }).then(invite =>
     message.channel.send(invite.url)
   );
