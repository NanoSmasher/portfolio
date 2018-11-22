---
thumb: 2017/cfd-thumb.png
img: ['2017/cfd-1.png','2017/cfd-2.png','2017/cfd-3.png','2017/cfd-4.png','2017/cfd-5.png']
caption: ['Test with image','Test with card information extracted','Test with another card game (Epic)','Test with searching algorithm and special characters','Hypergeometric calcuations and full BEDMAS support for test run throughs']
star: Yes
start: Febuary 2017
end: June 2017
tags: ['Communication','Product Development','Programming',]
---

Discord bot for serving Vangaurd and Epic card information.

<!-- more -->

Collectible trading card games offer a lot of complexity through the interaction between thousands of cards. Online websites for searching through cards are sometimes available, but it's better for players to be able to retrieve card information without switching applications.

Discord is an application that allows people to commnicate to a server with other people, similar to Messenger or Skype. It is used by many gamers (source?).

Due to the lack of a discord bot for Cardfight Vanguard I made my own to host on other servers. This was a very involved project requiring the following:

* Maintaining an updated database of card and card information:
	* Knowledge of official Vanguard queries, wikia API , and retrieving cards from a search parameter
	* search parameter would need to accept partial matches, and alias/nicknames for various cards
* Knowledge with Discord API and discord python structure
* Registration allowing bot to communicate with discord
* Reading messages on a server, and parsing instructions:
	* For example, if a person types in \[\[Blaster Blade\]\], the bot will need to parse the information between the double square brackets, complete a search function, and return the corresponding card information or return search results
	* In addition, the response in returning card information must be near instantaneous and must be able to serve multiple requests from multiple people (but not too many to avoid spamming) at the same time, requiring use of an asynchronous framework.
	* Logging parsed inputs and performance
	* Finally, the bot also had to interpret and evaluate complex mathemtical expressions without being susecptible to code injection (see image).

This discord bot was maintained for around one year, updating to match requests from other people and various bug fixes. At one point the entire fetching algorithm was changed due to one of the servers being too restrictive. Overall it was a fantastic project and learned a lot about creating bots and testing delibrate attempts to crash the bot (cause some end users are jerks).

Source code for the project is available on github: [https://github.com/NanoSmasher/cfvg-discordbot](https://github.com/NanoSmasher/cfvg-discordbot)