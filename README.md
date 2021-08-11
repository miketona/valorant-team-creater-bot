# Valorant team creater bot
```
A Discord Bot which takes in an input of several users, fetches their KDA and Rank, and breaks them up into two evenly matched teams for custom games.
```
## Using the bot
```
The input is special character based, however it is not that complicated. Begin the input with "!vcreate", then space, then enter the users and ids. Each user must have a "-" in between their name and id. After typing an id, seperate this user with the next one by a "/". Avoid spaces that are not included in a username.

Example discord message input: !vcreate userone-7661/usertwo-1234/aNoTherUser-NA1/a third user-NA1

```
## Project setup
```
npm install

enter bot key in .env file

npm start

Of course, you will also need to connect it with your discord server https://discordpy.readthedocs.io/en/stable/discord.html .
```

### TODO
```
At the moment, while the data for KDA is fetched, the sorting algorithm only looks at the rank. I would like to implement the KDA into this as well.
```


