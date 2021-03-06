module.exports = {
    name: 'ban',
    description: '\:hammer: Ban a user!',
    args: true,
    usage: '<user> (reason?)',
    async execute(message, args) {
        // Variable(s):
        const member = message.mentions.members.first();
        const reason = args.splice(1).join(' ');

        // Guard(s):
        if(!member || !message.guild.member(member.id)) return message.channel.send(`\:no_entry: Wasn't able to find that person, <@${message.author.id}>!`);
        if(!member.bannable || !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`\:no_entry: You can't ban that person, <@${message.author.id}>!`);

        // Ban:
        member.ban(reason);
        return message.channel.send(`\:hammer: Banned <@${member.user.id}>${reason.length > 0 ? ` for ${reason}!` : '!'}`);
    }
};
