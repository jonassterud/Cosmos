// Command
module.exports = {
    name: 'purge',
    description: '\:boom: Delete messages!',
    args: true,
    usage: '<amount>',
    execute (message, args) {
        // Check for errors:
        if(!/^100$|^[1-9][0-9]$|^[0-9]$/m.test(args[0])) return message.channel.send('\:no_entry: Invalid amount. Make sure the amount is in the range from 1 to 100, <@' + message.author.id + '>!');

        // Execute:
        message.channel.bulkDelete(parseInt(args[0]));
        return message.channel.send('\:boom: Deleted ' + parseInt(args[0]) + ' message' + ((parseInt(args[0]) > 1) ? 's' : '') + ', <@' + message.author.id + '>!');
    }
};
