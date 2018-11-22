---
thumb: 2016/rwb-thumb.png
img: 2016/rwb-1.png
caption: ['Example output of program when set to a verbose state']
star: Yes
start: Oct 2016
end: Aug 2018
tags: ['Programming','Product Development']
---

Download Fanart posted on the RWBY subreddit.

<!-- more -->

#### Project Aim

A lot of fanart is posted on the RWBY subreddit (source?), to the point where it is easy to miss good artwork. So it would be nice to download fanart for later viewing and sorting.

#### Approach

As Reddit is a well established website I first looked for a corresponding API. As well, most fanart is hosted on a popular image board called Imgur, which also has an API. However, for my first revision I used another python module - imgurdl - so I could focus on the Reddit API.

This was my first real project in working with the REST API, but the tutorials and documentaion on the API allowed for the program to be developed quickly in an iterative manner. API requests would have near immediate feedback, and the legibiliy of json files provided me with a strong understanding of the data structure returned. While the first "version" sucessfully downloaded images, there were a multitude of issues:

* The program had no security on client keys/secrets, and unecessarily used user/passwords  
* Terrible debugging options, failed regex operations where vauge in understanding where the problem came from  
* The imgurdl module was outdated and failed on many links   
* Program didn't actually account for all the fanart posted (from mislabelled images to images not hosted on imgur)
* Program kinda just ran, unable to be used as a module

For version 2, the python script was pretty much redone and incorporated the imgur API. With more familiarity with APIs and other python libraries all of the previous issues were resolved. For security the encryption is basic but functional, as values are no longer stored as plaintext. Debugging options can be enabled or displayed with verbose options, and the module (hopefullly) can be implemented as a module for other projects.

#### Result

I now have 10GB+ of RWBY fanart in the thousands sorted by year-month but have practically no time to look through and sort them all. A couple of other RWBY enthusiasts have also used the program and sent nice regards.

Artist attribution is still a difficult prospect. Being involved in the RWBY scene since the early days allows me to determine most contributors by artstyle, but the images downloaded are not going to be redistributed without knowledge of that artist and their intentions. This could be a starting point for a third version...

Source code for the project is available on github: [https://github.com/NanoSmasher/rwby-spider-v2]