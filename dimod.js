const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const dimod = new Discord.Client();
const prefix = "PREFIX LERA DABNE";


dimod.login("TOKEN LERA DABNE");
dimod.on("ready", async () => {
  console.log(`Logged in as ${dimod.user.username}!`);
  dimod.user.setStatus("ONLINE");
  dimod.user.setActivity(`${prefix}help`, { type: "WATCHING" });
  dimod.guilds.cache.forEach(g => {
    if (g.member(dimod.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

dimod.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Prefix [ ! ]","")
.setDescription(` 
**
・┊welcome [change channel]
・┊left [change channel]
**
**[ invite ]**
**[ click here ](link botakat)** 
**[ support ]**
**[ click here ](https://discord.gg/msrPc36PSX)**
 `)
    
    .setFooter(` DIMOD UP ✨ | Coded by , D1MODˢᵘⁿ/ᵇˡᵃᶜᵏ ʰᵃᵗ#3415`, dimod.user.avatarURL)
    .setURL("https://discord.gg/msrPc36PSX")
      
    message.channel.send(embed);
      message.react("❤️");
  }
});
//////////////

/////////// code welcome
dimod.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊welcome"
  );
  let dimod = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot by DIMOD`, `https://cdn.discordapp.com/avatars/828218881989935105/479953e51dadf4f38c5bc72c912193c5.webp?size=1024`)
    .setColor("RANDOM")
    .setThumbnail(dimod)
    .addField(
      "**name** : ",
      `${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      "**Welcome**",
      `Welcome to the server, ${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      "**ID** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "**All Member**",
      `${member.guild.memberCount}
      ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
dimod.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊left"
  );
  let dimod = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot`, `https://cdn.discordapp.com/avatars/828218881989935105/479953e51dadf4f38c5bc72c912193c5.webp?size=1024`)
    .setImage(
      "https://thumbs.gfycat.com/ChiefBiodegradableAmericanalligator-size_restricted.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(dimod)
    .addField("**name :**", `${member}`)
    .addField("Bye Bye", `!`)
    .addField("👋;(",   "bye bye")
    .addField(
      "All Memebers",
      `${member.guild.memberCount}` + "member"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
dimod.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      " name : ",
      `${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      "Welcome",
      `Welcome to the server, ${member}
    ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField(
      " User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "Your are the member",
      `${member.guild.memberCount}
      ◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      ""
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////CODED BY D1MOD

