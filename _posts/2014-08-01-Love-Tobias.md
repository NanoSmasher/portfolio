---
thumb: 2014/ltb-thumb.png
start: August 2014
end: September 2014
tags: ['Programming']
---

Asynchronous music manager for LOVE2D

<!-- more -->

Loading a lot of music takes a fair amount of time,  and is usually accompanied but an discerning freeze. To keep the action going music should be introduced as needed, and loaded in memory without causing slowdowns. This was the goal of LOVE Tobais, and there were only a few functions I aimed to implement:

* loading/unloading music  
* playing/pausing music  
* stopping music  
* increase/decrease music volume  
* fading music in  
* fading music out  

This was unfortunately way out of my scope. Dynamic loading, signaling, transitions, and such topics made me realize how hard it actually was to implement a framework like this. It made me realize why developers often frontloaded most of the work with long loading screens and black fade out transitions, giving extra props to the games with "seemless loading" in games like God of War (PS4). Seamless loading spans several talks in of itself at gaming conferences, meaning this area still has a lot of room to grow.

Source code for the (failed) project is available on github: [https://github.com/NanoSmasher/love-tobias]