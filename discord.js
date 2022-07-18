const Discord = require("discord.js");
const restake = require("./restakeBot.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});


client.on("ready", async () => {
  
    let testChannel = client.channels.cache.find(channel => channel.id
        === "channelId")
  console.log("the bot is ready");

  setInterval(async () => {
    await testChannel.send(await restake.all());
  }, 172877000);
});

client.login(
  "Your Token"
);
