// Command
module.exports = {
    name: 'info',
    description: '\:mag: Get info about a user!',
    args: true,
    usage: '<user>',
    execute (message) {
    // Variables:
        const member = message.mentions.members.first();
        const embed = new Discord.MessageEmbed();

        // Check for errors:
        if(!member || !message.guild.member(member.id)) return message.channel.send("\:no_entry: Wasn't able to find that person, <@" + message.author.id + '>!');

        // Edit embed:
        embed.setTitle(member.user.tag);
        embed.setThumbnail(member.user.avatarURL);
        embed.setColor('#ff0000');
        embed.addField('Identification:', member.user.id);
        embed.addField('Account created:', member.user.createdAt.toDateString());

        // Send embed:
        return message.channel.send(embed);
    }
};
