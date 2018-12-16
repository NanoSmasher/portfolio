# Dinomuz responsive jekyll theme

[Dinomuz](https://colorlib.com/wp/template/dinomuz/) is a responsive jekyll theme made by ColorLib. It has been transformed into a single page portfolio with extensibility of Jekyll.

## Template Features:

* Clean & Simple Design  
* HTML5 & CSS3  
* Fully Responsive Design  
* PHP/Ajax Powered Working Contact Form  
* All files are well commented  
* Cross Browser Compatible with IE11+, Firefox, Safari, Opera, Chrome  
* Extensive Documentation (found by downloading the theme from: [])  

## Installation:

If hosting on github, cloning the master branch of this repository and creating your own gh-pages branch should be suffice.

Hosting this theme on another website requires Ruby Gems and Rails. Bundler is recommended to install the remaining gems from the Gemfile.

For a local copy, Ruby, RubyDevKit, and Jekyll are required. Windows users can just download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Some zip programs have problems extracting so make sure to cross check with the repository)

For non-commercial purposes, as per the license of ColorLib Dinomuz states, the footer should not be removed or altered in any way. You may read more about the license on their [](theme page).

## Editing:

* Most of the configurable options are available in the **_config.yml** file.
* Background graident can be changed with the $left-color and $right-color variables in **_scss/theme**.
* **_posts** hold all of the individual portfolio pages. img and tags can be lists or just a simple string. Date format follows Ruby's [time parser](https://ruby-doc.org/stdlib-2.5.1/libdoc/time/rdoc/Time.html#method-c-parse)
* In the **img** folder, **dinomuz-logo.png** is the only file you should not alter, as well as the images in **img/elements** if you use checkboxes/radio.
* "above the fold" css is generated using [https://jonassebastianohlsson.com/criticalpathcssgenerator/](https://jonassebastianohlsson.com/criticalpathcssgenerator/)

## Misc. Credits

* [Determining difference between two dates](https://stackoverflow.com/a/42957288)
* [WebP generation from Google Dev](https://developers.google.com/speed/webp/docs/precompiled)
* [Image compression](https://tinyjpg.com)

## License

https://colorlib.com/wp/template/dinomuz/
Licence: CC BY 3.0 (footer credits must remain in place)