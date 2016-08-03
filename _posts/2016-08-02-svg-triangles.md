---
layout: post
title:  "Drawing SVG files"
date:   2016-08-02 12:00:00
categories: javascript jquery svg
---

At Epicodus, one of our weekly tests was to design a web-app that would return the type of triangle based on three input values.
Simple enough, but I wanted to actually _see_ the triangle, not just its supposed type. The triangle,
if it exists, is also drawn using jQuery and SVG polygons. Turns out, my 9th-grade math teacher was right--- algebra did come in handy someday.

<a href="{{ site.url }}/assets/triangles/" target="_blank">Triangle Tracker</a>

{% gist tjheffner/79945d95f96cff582d924402e557b4dc svg-triangles.js %}
