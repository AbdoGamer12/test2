const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("628594026311843882
")
setInterval(function() {
channel.send(`Abdo_Gamer Abdo_Gamer Abdo_Gamer Abdo_Gamer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);