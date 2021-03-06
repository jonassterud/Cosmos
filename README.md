<div align="center">
 <image src="./logo/vector/default-monochrome.svg"/>
 <br>
 <a href="https://github.com/jonassterud/cosmos/actions"><img src="https://github.com/jonassterud/cosmos/actions/workflows/main.yml/badge.svg"/></a>
 <a href="https://github.com/jonassterud/cosmos/graphs/contributors"><img src="https://img.shields.io/github/contributors/jonassterud/cosmos.svg?color=informational"/></a>
 <a href="https://github.com/jonassterud/cosmos/issues"><img src="https://img.shields.io/github/issues/jonassterud/cosmos.svg?color=informational"/></a>
 <a href="https://github.com/jonassterud/cosmos/blob/master/LICENSE"><img src="https://img.shields.io/github/license/jonassterud/cosmos.svg?color=informational"/></a>
</div>

## About
Cosmos is an open source Discord bot made with Node.js. It mainly focuses on entertainment type commands, but it also supports some administration commands (`ban`, `kick`, `mute`, etc.). Cosmos also supports playing music from YouTube. It can handle both individual videos and playlists (and even live videos!). You can also search for videos trough Cosmos. It also includes a credit system. You can use the credits you earn over time on different minigames (`blackjack`, `coinflip`, `trivia`, etc.). Type `?help` to get started!

## Links
[Invite me!](https://discordapp.com/oauth2/authorize?client_id=672828141743374340&scope=bot&permissions=8) (*Still under development, but now available to invite!*)  
[What's next?](https://github.com/jonassterud/Cosmos/projects/1)  
[Something wrong?](https://github.com/jonassterud/Cosmos/issues)

## Local setup
1. Install [Node.js ^14.3.0](https://nodejs.org/en/).
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
3. Run `yarn install` in a terminal in the project root directory.
4. Generate a bot application on [Discord Developer Portal](https://discordapp.com/developers/applications/).
5. Create a file called `.env` in the `src` folder and fill it with the secret keys specified below.
6. Start your server by running `yarn run start` or `npm start`.
7. Invite your bot by inserting the bot's client id into this link: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_HERE&scope=bot&permissions=8`.
8. That's it! Need help? Create an issue [here](https://github.com/jonassterud/Cosmos/issues) and tag it as "*need help*".
 
## Secrets
Secrets are stored in a *.env* file. It holds holds secret information such as the the [Discord bot token](https://discordapp.com/developers/applications/), the [Pixabay API token](https://pixabay.com/no/service/about/api/), the [API token for Giphy](https://developers.giphy.com/dashboard/), the [Alpha Vantage API token](https://www.alphavantage.co/) and the [YouTube API token](https://console.cloud.google.com/projectcreate). The *.env* file should be inside the *src* folder, and it should look like this:
```
{
    TOKEN=Discord bot token here
    YOUTUBE=YouTube API token here
    GIPHY=Giphy API token here
    PIXABAY=Pixabay API token here
    ALPHAVANTAGE=Alpha Vantage API token here
}
```

## Configuration
Configuration data is stored in the *config.json* file. The *config.json* file should be inside the *src* folder, and it should look like this:
```
{
    "prefix": "Your prefix here",
    "message_reward": "Credit reward on each message here",
    "starting_balance"": "Initial balance upon account creation here"
}
```

## Contributing
Just do whatever you want and create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jonassterud/Cosmos/blob/master/LICENSE) for details.
