---
thumb: 2015/vpm-thumb.png
img: ['2015/vpm-1.png']
caption: ['GUI for a program that calculated expected value from specific ratios of "triggers"']
start: January 2015
end: May 2015
tags: ['Communication','Programming']
---

Caluation scripts from principles of probability and game theory.

<!-- more -->

Cardfight Vanguard is a very fun card game (needs source). However there is a lot of heated debate on deck building advice. There are a few core mechanics that fundamentally affect each game:

* Ability to play a "grade 1" card on turn 1, play a "grade 2" card on turn 2, and play a "grade 3" card on turn 3.
* Probability of what type of card the top card is at any given moment.

Probability can solve these problems, however the complexity lies in the multiple ways a card can affect the aforementioned points. This is where scripts can come in handy, as they can perform all the number crunching and calculations without error.

There were some python libraries with probability however the overhead is ridiculous and still not specific enough for the problems to solve, so the code was made from scratch.

Source code for the project is available on github: [https://github.com/NanoSmasher/Python-Vanguard-Probability-Modules](https://github.com/NanoSmasher/Python-Vanguard-Probability-Modules)