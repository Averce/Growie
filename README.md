# Growie
The legacy discord bot 'Growie' codebase small bot for discord dedicated to growtopia.

# Setting Up
- **1. Cloning the repository:**
```
git clone https://github.com/Averce/Growie
```
- **2. Installing dependencies:**
```
npm install
```
- **Filling the config.js file:**
```js
const config = {
  "token":  "-",
  "btoken": "-",
  "prefix": "-",
  "admins": [],
  "dbUrl": "",
  "patreons": [],
  "supporters": [],
  "dashboard" : {
    "oauthSecret": "-",
    "callbackURL": "http://localhost/callback",
    "sessionSecret": "-",
    "domain": "localhost",
    "port": 7070
  },
  permLevels: [
    { level: 0,
      name: "User",
      check: () => true
    },
    { level: 2,
      name: "Moderator",
      check: (member) => {
        try {
          if (member.permissions.has("MANAGE_MESSAGES") || member.permissions.has("BAN_MEMBERS") || member.permissions.has("MANAGE_GUILD") ) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator",
      check: (member) => {
        try {
          if (member.hasPermission("MANAGE_GUILD") ||  member.permissions.has("ADMINISTRATOR")) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
          
        }
      }
    },
    { level: 4,
      name: "Server Owner",
      check: (member) => {
        if (member.guild.ownerID === member.id) return true;
        else return false;
      }
    },
    {
      level: 6,
      name: "Worker",
      check: (member, client) => {
        if (client.isWorker(member)) return true;
        else return false;
      }
    },
    { level: 9,
      name: "Bot Admin",
      check: (member) => config.admins.includes(member.id)
    },
    { level: 10,
      name: "Bot Owner",
      check: (member) => "-" === member.id
    }
  ]
};
module.exports = config;
```
# Issues
This repository isn't planned on getting any updates or maintenance but if you have issues or want help, don't hesitate to open an issue.
Or join my discord programing server at [https://discord.gg/af23r2f](https://discord.gg/a24faFa4).
