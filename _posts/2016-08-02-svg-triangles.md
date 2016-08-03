---
layout: post
title:  "Dynamically draw SVG polygons with jQuery"
date:   2015-04-20 12:00:00
categories: javascript jquery svg
---

At Epicodus, one of our weekly tests was to design a web-app that would return the type of triangle based on three input values.
Simple enough, but I wanted to actually _see_ the triangle, not just its alleged type. The triangle, if it exists, is also drawn using jQuery and SVG polygons. Turns out, my 9th-grade math teacher was right--- algebra did come in handy someday.

You can click <a href="{{ site.url }}/assets/triangles/" target="_blank" __>here to view the Triangle Tracker.</a>

Below, is the example code, showing how you can map form input values to an SVG canvas using jQuery in order to dynamically draw polygons. I'm going to warn you, there is some algebra.

First, we're going to build the form structure. We want a form, an area to track submitted values, and a canvas to draw the triangles from submitted values. Here's what that looks like:
{% gist tjheffner/79945d95f96cff582d924402e557b4dc triangles.html %}

Hopefully that was fairly straightforward. We have a form with an input field for each side of a triangle. After the form comes an SVG object, with a polygon item where the SVG will be drawn, if possible. After the canvas comes some container divs, for lists tracking previously input values. Each of these items has a unique id to make the jQuery selections easier.

Speaking of jQuery, we need the glue that will put all of those pieces together. The following script uses jQuery to take the form inputs, compute the type of triangle, if any, and then draw a SVG polygon to the canvas, using algebra and geometry.

{% gist tjheffner/79945d95f96cff582d924402e557b4dc svg-triangle.js %}

Let's break that down.

Before we do anything, we wait until the entire page has loaded. Then, we only fire the triangle logic on the form submit. This stops us from drawing triangles whenever a single input is changed, only when the whole form is ready. <br>

The '#type' clearing corresponds to a `<span>` element in the form structure that displays the input values' resulting triangle type. <br>

Each input value gets a variable. These represent sides of a triangle. We sort the values here to prepare for our algebra to come. We know that a triangle has 3 sides, and from this alone we can determine the type of triangle. We also know that a triangle has an area of 1/2 * base * height. That's the formula we need for drawing triangles, but it doesn't do us a lot of good when we have three sides. Fortunately, there's a formula for finding the area of a triangle if you know the length of all three sides. <br>

That formula goes like this: <br>
<ul class="stuff">
<li>s = the sum of all sides / 2</li><br>
<li>area = sqrt(s * (s - side 1) * (s - side 2) * (s - side 3))</li><br>
</ul>

So we can find the area, plus three sides. Thanks to our sorted values, we can use the longest side as the base. This gives us <br>
<ul class="stuff">
<li>AREA = 1/2 * sorted[0] * h</li><br>
<li>h = (2 * A) / sorted[0] </li><br>
</ul>

 This knowledge allows us to draw the triangles dynamically upon form input.<br>

We create a triangle object with 5 values--- 3 sides, plus a height value, and a "short" value, which is the smallest side of a right triangle that has the hypotenuse and second longest side equal to side2, aka sorted[1], and height. This 'short' value is the key to plotting the triangle vertices on the svg canvas. <br>

After the triangle object, we use some logic with the first three values to determine what kind of triangle it is. If all inputs are the same, equilateral. Two identical inputs is isosceles, otherwise scalene. This determination is then output through the `<span id='#type'>` mentioned earlier. The input values for that type are also attached to the appropriate list. <br>

Now comes the drawing logic. In the #picture div, we have an svg object with a set size, containing a polygon object that has a style applied, but no coordinates. We're going to use our triangle object values as points for the polygon. Because the inputs change every time the form is submitted, the triangle polygon created dynamically changes as well. <br>

Our SVG object is set to a size of 400px wide by 300px tall. SVG uses a coordinate system where 0,0 is in the top left corner of the object. So our canvas goes from (0,0) to (0,400) across the x axis and (0,0) to (0,300) down on the y axis. <br>

With three sides to a triangle, we need three vertices, or for our purposes, coordinates. I arbitrarily place our first triangle corner coordinate at (100, 100) to help keep math easy. <br>

If the sides can't physically make a triangle, where the longest side is greater than the sum of the two shorter sides, the triangle is therefore "impossible" and we don't have to worry about drawing it. These values get thrown into the "impossible" list and the canvas is hidden.<br>

If the sides _can_ make a triangle, we use our first point at (100,100) and follow the x axis the length of our longest side. The y axis doesn't change. This gives us a line across the x axis at (100, 100) to (100 + the length of side 1, 100). We now how two points of the triangle. The third point will need to be the height of the triangle, as we calculated earlier. This gives us half of the coordinate pair-- ( ?, 100 + height). We add 100 for the same reason we added 100 to the x value of the other point-- our starting point is 100,100, so we treat that as our origin. Similar to zero-ing out the container weight when measuring on a scale-- we know that value is there, but we're pretending it isn't. <br>

So we have two and a half vertices: <br>

<ul class="stuff">
  <li>(100, 100) </li><br>
  <li>(100 + a, 100)</li> <br>
  <li>(? , 100 + h)</li> <br>
</ul>

In order to find that missing x coordinate, we need to do some math. This is the reason we calculated the "short" value of the triangle earlier. The short function finds the value of the smallest side of the right triangle created by taking the height of our large triangle and the side opposite. The "short" value is a segment of the longest side of the large triangle. <br>

If we take the Pythagorean theorem `(side1^2 + side2^2 = side3^3)` and substitute in height for side3 and our short value for side1, we get  `short = sqrt(side2^2 - height^2)`.<br>

Using this value, we know how far down the X axis we need to be for our last point to connect the original two sides. This makes our last coordinate pair (100 + short, 100 + h). By choosing to always draw one triangle side flat across the y=100 line, we only have to compute one coordinate pair. <br>

We now use jQuery to select the polygon item and tell it what points to draw from. It already has styles applied from the form structure, so coordinates are all it needs. If the triangle is impossible, we hide the svg entirely. <br>

And that's it! Now you can use math to dynamically create polygons from form inputs to your heart's desire.
