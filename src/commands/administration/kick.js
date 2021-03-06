module.exports = {
    name: 'kick',
    description: '\:pick: Kick a user!',
    args: true,
    usage: '<user> (reason?)',
    async execute(message, args) {
        // Variable(s):
        const member = message.mentions.members.first();
        const reason = args.splice(1).join(' ');

        // Guard(s):
        if(!member || !message.guild.member(member.id)) return message.channel.send(`\:no_entry: Wasn't able to find that person, <@${message.author.id}>!`);
        if(!member.kickable || !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`\:no_entry: You can't kick that person, <@${message.author.id}>!`);

        // Kick:
        member.kick(reason);
        return message.channel.send(`\:pick: Kicked <@${member.user.id}>${reason.length > 0 ? ` for ${reason}!` : '!'}`);
    }
};
