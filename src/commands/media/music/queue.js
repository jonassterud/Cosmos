module.exports = {
    name: 'queue',
    description: '\:musical_note: See the music queue!',
    args: false,
    usage: '',
    async execute(message) {
        // Guard(s):
        if(!queue?.[message.guild.id] || !queue?.[message.guild.id]?.urls) return message.channel.send(`\:question: Queue is empty, <@${message.author.id}>!`);

        // Create embed:
        const embed = new Discord.MessageEmbed()
            .setTitle('\:musical_note: Song queue')
            .setColor('#ff0000')
            .setTimestamp(new Date());

        // Loop trough songs:
        const maxSize = 4;
        for(let i = 0; i < queue[message.guild.id].urls.length && i < maxSize - 1; i++) {
            try {
                const song = await ytdl.getBasicInfo(queue[message.guild.id].urls[i]);
                const length = `${Math.floor(parseInt(song.videoDetails.lengthSeconds) / 60)} minutes and ${parseInt(song.videoDetails.lengthSeconds) % 60} seconds`;
                embed.addField((!i ? 'Currently playing:' : `${i}.`), `Title: *${song.videoDetails.title}*\nDuration: *${song.player_response.videoDetails.isLive ? 'live' : length}*`);
            } catch(_) {
                queue[message.guild.id].urls.splice(i, 1);
            }
        }

        // Show remaining songs:
        const remaining = queue[message.guild.id].urls.length - maxSize;
        if(remaining > 0) embed.addField('...', `and ${remaining} more!`);
        return message.channel.send(embed);
    }
};
