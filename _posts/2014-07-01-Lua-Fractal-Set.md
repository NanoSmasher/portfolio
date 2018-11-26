---
thumb: 2014/lfs-thumb.png
img: ['2014/lfs-1.png','2014/lfs-2.png','2014/lfs-3.png','2014/lfs-4.png','2014/lfs-5.png']
caption: ['Orbit Diagram showing bifurcation of values','Classic quadratic Mandelbrot set, revealing regions of closed Julia spaces','Example of closed Julia set at -0.4+0.6i using a filling method','Basic UI showing options for backwards iterating and boundary scanning (latter useful for open Julia sets)','Transcendental Julia Set with sin because...why not?']
start: June 2014
end: July 2014
tags: ['Programming']
---

Fractals are beautiful.

<!-- more -->

Fractals are beautiful. In here are Julia sets and Mandelbrot sets (from the simple quadratic to the irrational trigonometric functions). Each point in the Mandelbrot set represents a closed Julia set. Each of the programs were built with forward, backward, and boundary scanning methodologies.

#### Orbit Diagram
Consider a basic function like Q(x) = x^2.
* If an initial value x is a number less than -1 or greater and Q(x) is the for input Q(x) than 1 the x will tend to infinity
* If an initial value x is a number between -1 and 1 and Q(x) is the input for Q(x), x will tend toward 0 (stable)
* x = 1 or x = -1 will always result Q(x) = 1 (stable)

Now consider Q(x) = x^2 + c, where c is a real constant. For a particular **seed value** c, what values of x will be stable (black), and which values are unstable (white)?

#### Julia Set

Now consider the function Q(x) = x^2 + c, where c is a seed value containing both real and imaginary parts. A julia set is drawn with horizontal x-axis representing the real part and With the vertical y-axis representing imaginary part, which forms a **basin boundary**. This can either be one closed shape, or many small 'open' islands. 

* For closed shapes, the boundary scanning method is faster and provides a clearer picture.
* For open shapes, the backwards iteration method provides a better picutre.

#### Mandelbrot Set

The Mandelbrot set is a dictionary of seed value ***c*** which details which Julia Sets whose basin boundaries are open (white) or closed (black). This is why the program does not provide an input for c, as it is already displaying all c values for a Julia set.

***Q(x) = x^2 + c*** is the most famous and notable Mandelbrot set, but any other function can be done.
* Q(x) = x^3 + c  
* Q(x) = x^4 + c  
* Q(x) = c * sin(x)  
* Q(x) = c * e^x

Source code for the project is available on GitHub: [https://github.com/NanoSmasher/lua-fractal-set](https://github.com/NanoSmasher/lua-fractal-set)