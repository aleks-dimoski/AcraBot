// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

var alanisms = ["GO NEEEXT", "VOICE\nVOICE\nVOICE\nVOICE\nLEAGUE VOICE", "ooooo just FF already", "I have some new tech ;)", "POGGERS", "my laners are inting", "MonkaS"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", (message) => {
if(message.content == "Alan?"){ // Check if content of message is "!ping"
		var alanism = alanisms[Math.floor(Math.random() * alanisms.length)];
		message.channel.send(alanism); // Call .send() on the channel object the message was sent in
	}
});