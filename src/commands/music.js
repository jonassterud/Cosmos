// Get libraries
const ytdl = require('ytdl-core'); // Node.js package - Downloads YouTube videos

// Global variables
let queue = [], playing = false, connection = "";

// Command
module.exports = {
    name: 'music',
    description: '\:musical_note: Listen to the audio from a YouTube video in your current voice channel!',
    args: true,
    usage: '<YouTube URL>',
    execute(message, args) {
        // Variables:
        const voice = message.member.voiceChannel;
        if (!voice) return message.channel.send("\:no_entry: Please join a voicechannel before excecuting the command");

        //Check for skip
        if (args[0] == "skip") {
            if (connection != "") {
                connection.dispatcher.end();
                return message.channel.send("\:cd: Skipping song...")
            } else {
                return message.channel.send("No songs in queue " + message.author);
            }
        }
        if (args[0] == "queue") {
            if (!queue.length) return message.channel.send("No songs in queue " + message.author);
            let embed = new Discord.RichEmbed()
                .setTitle("Song queue \:musical_note:")
                .setColor('#ff0000')
                .setTimestamp(new Date());
            const loop = async _ => {
                for (let i = 0; i < queue.length; i++) {
                    let songUrl = queue[i];
                    await ytdl.getInfo(songUrl).then(info => {
                        if (i == 0) {
                            embed.addField("Current song:", " " + info.title);
                        } else {
                            embed.addField("Song number " + i + ":", " " + info.title);
                        }
                        if (i == queue.length - 1) {
                            return message.channel.send(embed);
                        }
                    }).catch();
                }
            }
            loop();

            return;
        }

        // Add to queue:
        //Make sure this is actually a youtube link
        const re = /youtube.com\/watch\?v=[a-zA-Z\d\=\&\-\_]+$/g
        let ytbUrl = args[0];

        if (!re.test(ytbUrl)) return message.channel.send("\:no_entry: Please enter a valid youtube url");

        queue.push(ytbUrl);
        message.channel.send("\:ok_hand: The video was added to the queue, <@" + message.author.id + ">!");

        // Play:
        if (!playing) {
            if (connection == "") {
                voice.join().then(conn => {
                    connection = conn;
                    play();
                }).catch();
            } else {
                play();
            }
        }

        function play() {
            if (queue.length) {
                // Change state:
                playing = true;
                // Print title:
                ytdl.getInfo(queue[0]).then(info => message.channel.send("\:musical_note: Now playing: " + info.title)).catch();

                // Play song:
                // Variables:

                let stream = ytdl(queue[0], {
                    quality: "lowest",
                    filter: "audioonly"
                });

                let disp = connection.playStream(stream, {
                    seek: 0,
                    volume: 1
                });

                // Finished song event:
                disp.on('end', () => {
                    queue.shift();
                    play();
                });



            } else {
                playing = false;
                connection = "";
                message.channel.send("\:frowning: Session over. No more songs in queue!");
                voice.leave();
                return;
            }
        }
    }
};