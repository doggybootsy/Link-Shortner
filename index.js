const { Plugin } = require('powercord/entities');
const { get } = require('powercord/http');
const { command } = require('../pc-commands/commands/echo');

module.exports = class Linkshortner extends Plugin {
    startPlugin () {
        powercord.api.commands.registerCommand({
            command: "Link Shortner",
            aliases: [ "Url Shortner", "Url Shortner", "UrlShortner", "Link Shortner", "LinkShortner" ],
            description: "Lets you shrink urls using is.gd",
            usage: "{c}LinkShortner <url>",
            executor: this.linkshortner.bind(this),
            autocomplete: args => {}, // shows auto complete
        });
    }
    pluginWillUnload() {
        powercord.pluginWillUnload('Linkshortner')
    }
    async linkshortner(args) {
        const data = await get("https://is.gd/create.php?format=simple&url="+args[0]);
        return {
            send: true,
            result: `${data.body}`
        };
    }
};
