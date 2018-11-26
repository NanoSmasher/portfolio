---
thumb: 2017/rpi-thumb.png
img: ['2017/rpi-1.png','2017/rpi-2.png','2017/rpi-4.png']
caption: ['Club news being distributed through the Raspberry Pi','Transition document for simplified setup','Pets from other students to liven up the mood!']
star: Yes
start: September 2017
end: December 2017
tags: ['Communication','Product Development','Course Project','CES EduPack']
---

Raspberry Pi News Ticker

<!-- more -->

#### Project Aim

In the last few years, e-mails and word of mouth were the primary methods used to promote events to other students in the MSE discipline. To increase communication of upcoming events different types of media were established including Snapchat, the MSE club website, and Instagram. However it was noted that many students come to the common room during lunch hours, providing another outlet for advertising events. The TV set placed in the room had been underutilized by students, so the suggestion was put forth to convert the TV into a bulletin board.

#### Approach

The TV only has input for HDMI and component cables (no USB port). No option to produce slides was found in the TV software. None of the club members had a portable digital media player, but one had a spare Raspberry Pi to lend. The raspberry pi offered other advantages that were made apparent later:

* Pi can be used to stream Youtube videos from cellular devices and laptops through the Universities WPA-EAP security network  
* Wifi dongle also allowed slideshows to be updated remotely
* In theory, able to send signals to turn the television screen on and off

To ensure the main function is as lightweight and reliable as possible, the raspberry pi used a simple boot script to run an image viewing program called **feh**. feh is able to take images from external media (a USB) and protray it onto the screen in a variety of ways. It also rechecks all playable files after each cycle, meaning changes made through the wi-fi server and pscp will be returned in real time.

{% highlight bash %}
feh -Y -x -q -R 7 -D 7 -B black -F -Z --r /media/
{% endhighlight %}

A surprising detail not mentioned much in the Raspberry Pi OS is that it automatically dims the screen after a certain period of time. Even worse, there is no built in method to disable this feature. Ironically the solution was to install a custom screensaver, **xscreensaver**, and use it's program to disable the screensaver.

The wifi-adapter was set up as an ad-hoc server due to the absence of a router. A DHCP server program did most of the heavy lifting, however some custom firmware for the usb was necessary. If both setups fail (such as the usb dongle not inserted properly or not receiving enough power), it would default  to displaying a slideshow. After a lot of troubleshooting, the Pi had to be downgraded to Debian Squeeze in order for everything to function smoothly.

For streaming twitch videos and other streaming services, [**streamlink**](https://github.com/streamlink/streamlink) and omxplayer were used. Streamlink is a continuation of the now abandoned livestreamer project, that supports streaming of Twitch videos to a custom video player built to efficiency use the Raspberry Pi's graphics processor. (Applications like VLC were too slow and stuttered frequently, making it less than ideal). Unfortunately, streaming videos had to be started and stopped via the command line

{% highlight bash %}
export DISPLAY=:0.0
DESKTOP=:0 streamlink twitch.tv/teamsp00ky "720p,480p,worst" -np 'omxplayer -o hdmi --timeout 20'
Crtl+Z
disown -h %1
...
top
ps -A | grep 
sudo kill <pid>
{% endhighlight %}

Streaming Youtube videos required a different program. To allow other students in the MSE discipline the ability to stream videos, **RaspiCast** was elected as it has video & picture streaming while having clients on Android smartphones.

#### Results

Students were more informed about upcoming events, and enjoyed the additional features like Youtube and Twitch streaming. Short events like showing off MSE pets allowed them to directly contribute to the ultility of the Raspberry Pi and the installed television.

As of Summer 2018 the Raspberry Pi remains in Wallberg Building Room 143, with control of the Pi and it's administrative credentials transferred to another student in the MSE discipline club.