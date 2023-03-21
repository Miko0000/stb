const Discord = require("discord.js");
const client = new Discord.Client({ intents: [
	"Guilds",
	"GuildMessages",
	"GuildMessageReactions",
	"GuildMembers",

	"MessageContent",

	"DirectMessageReactions"
].map((str) => Discord.IntentsBitField.Flags[str]) });

global.client = client;

require("mod/botter");
require("mod/echo");
require("mod/sweeps");
require("mod/pcontrol");
require("mod/loginator");

client.on("ready", () => console.log(`[${Date.now()}] Ready!`));
/*client.login("");*/