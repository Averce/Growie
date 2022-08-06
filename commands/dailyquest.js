const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars

const Command = require("../base/Command.js");

const Settings = require("../models/settings.js");

const fs = require("fs");

const request = require("request");

class DailyQuest extends Command {

  constructor (client) {

    super(client, {

      name: "dailyquest",

      description: "Sends today's daily quest.",

      category: "Tools",

      usage: "",

      enabled: true,

      guildOnly: true,

      aliases: ["dq", "quest", "daily"],

      permLevel: "User",

      cooldown: 5,

      args: false

    });

  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars

    var dailyQuest = fs.readFileSync("dailyQuest.json", { encoding: "utf8" });

    dailyQuest = JSON.parse(dailyQuest);

    if (!dailyQuest.item1) return message.channel.send("No daily quest has been set.");

    var totalCost = (parseInt(dailyQuest.item1.price) / parseInt(dailyQuest.item1.quantity) * parseInt(dailyQuest.item1.needed)) + (parseInt(dailyQuest.item2.price) / parseInt(dailyQuest.item2.quantity) * parseInt(dailyQuest.item2.needed));

    const embed = new Discord.MessageEmbed()

      .setAuthor("Helltopia Daily Announcements", "https://cdn.discordapp.com/emojis/619959927120855060.png?v=1")

          .setFooter(message.author.tag, message.author.displayAvatarURL({dyanmic: true}))

          .addField("Daily Quests Items", `${dailyQuest.item1.needed} **${dailyQuest.item1.name}** for ${dailyQuest.item1.price} <:wl:911871460144980038>
${dailyQuest.item2.needed} **${dailyQuest.item2.name}** for ${dailyQuest.item2.price} <:wl:911871460144980038>`)

          .addField("Estimated Daily Quest Cost:", `<:wl:911871460144980038> ${`${totalCost.toFixed(2)}`.replace(".", ",").replace(",00", "")} World Locks`)

          .setTimestamp()

          .setColor("GREEN")

      .setFooter('Item price is subject to change based on demand')

    reply(embed);

  }

}

module.exports = DailyQuest;

function isFloat(n){

  return Number(n) === n && n % 1 !== 0;

}