---
thumb: 2014/csr-thumb.png
img: ['2014/csr-1.png','2014/csr-2.png','2014/csr-3.png','2014/csr-4.png']
caption: ['Event Day! Here is a technical lead hellping a student with their program','Explanation of theory used by technical leads','Sample of Event Handout','Example of program when functioning properly']
star: Yes
start: April 2014
end: July 2014
tags: ['Project Management','Communication','Product Development','Programming',]
---

Program atomic configurations using content from first-year courses.

<!-- more -->

Technical leads in the Multidisciplinary Kinesthetic Education Club plan, develop, and prototype a workshop event for junior engineering students to help them establish the practicality of theories they are being taught. Each workshop will need to consider materials cost, time allotted, and additional instruction beyond the main course content.

My goal was to help students understand and interpret crystal structures on a 2D plane. Displaying the real life prototype of the different crystal structures to the class was the traditional (sic) method used as a teaching aid. However, these structures do not show to near infinitesimal repetition of the actual crystal or allow the model to be cut away and viewed in any more than a couple angles. For this, I elected to use Lua (with LOVE framework) and Python (with the VPython framework) to program to freely rotate and cut sections from a repeating 3D structure. The event would focus on these three courses:

- MSE101: Fundamentals of Materials Science  
- MAT188: Linear Algebra  
- ECE160: Fundamentals of Computer Programming

The largest issue that arose when developing the program was being able to keep the parts necessary to edit as simple as possible requiring as little programming as necessary, as most students have great trouble with programming*. From presenting my progress on the program throughout the summer, to running a mock event, the program went through numerous iterations to further refine this portion of the workshop.

\* As evident from course averages and tone of the course in my year.

On the day of the workshop, 90% of the students were able to complete all the required activities in the allotted time, with the most common issue being interpreting the transformation matrices required for the program to function properly. In the time I spent juggling between the three courses, I had inadvertantly overlooked the linear algebra portion. With this feedback, I learned to give consideration to all objectives. Future revisions of this event would likely remove material from one of the three courses (to allow the workshop to be completed in due time).

Source code for the project is available on github: [https://github.com/NanoSmasher/crystal-structure-rotation](https://github.com/NanoSmasher/crystal-structure-rotation)