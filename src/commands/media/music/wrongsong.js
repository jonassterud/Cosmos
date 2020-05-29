module.exports = {
    name: 'wrongsong',
    description: '\:chair: Remove recently added song!',
    args: false,
    usage: '',
    async execute(message) {
        // Guard(s):
        if(!queue?.[message.guild.id] || !queue?.[message.guild.id]?.urls) return message.channel.send(`\:question: Queue is empty, <@${message.author.id}>!`);

        // Remove last song:
        await ytdl.getBasicInfo(queue[message.guild.id].urls.pop(), (err, data) => {
            if(err) return message.channel.send(`\:open_mouth: Removed last song from queue, <@${message.author.id}>!`);
            else return message.channel.send(`\:open_mouth: Removed "*${data.title}*" from the queue, <@${message.author.id}>!`);
        });
    }
};
