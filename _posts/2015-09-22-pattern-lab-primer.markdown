---
layout: post
title:  "Pattern Lab Primer"
date:   2015-09-22 00:00:00
categories: "pattern lab" atomic design systems prototype style guides
---

[Pattern Lab](http://patternlab.io){:target="_blank"} can seem daunting at first! There's a lot of ground to cover and options to configure properly to really make the most of what Pattern Lab offers. Luckily for us, people have created wonderful kits that do all of the configuration work for us. 

This post will attempt to introduce a sane workflow with Pattern Lab, using one of those aforementioned wonderful kits. In particular, we will be using this one: [Pattern Lab Starter from Phase2](https://github.com/phase2/pattern-lab-starter){:target="_blank"}.

Designing things atomically may seem like a pain at first, after all, when is a button or link going to exist solely on its own? Probably never.

However, designing sites atomically with Pattern Lab offers enormous benefits. First, everyone has access to everything-- it's very easy to see all design components at a glance and how they fit together. This improves communication among various team members immensely. No more confusion about if you meant the header-logo-small or the small-logo-header. It also makes editing trivial. Need to change a wrapper div around a button? Thanks to templating, fix it in one place, it's fixed everywhere. No more hunting through thirty different pages to make sure you didn't miss one.

With live-reloading, viewport resizing, and page-specific json, it's super easy to ensure your site works as intended in all sorts of conditions.

Prereqs, installation, setup
----
This walkthrough assumes your computer has node and ruby. If you're on a mac, ruby is preinstalled. If `node -v` returns something like `v0.10.xx`, you're all set. If not, visit [node.js](https://nodejs.org/en/){:target="_blank"}.

1. To keep this as simple as possible:
`npm install -g generator-pattern-lab-starter`

2. Make a new directory to hold your pattern lab site. 
Once in that directory: <br>`yo pattern-lab-starter`
<br>

 If `yo` isn't an available command, install [Yeoman](https://yeoman.io){:target="_blank"} using: <br>`npm install -g yo`

3. This isn't required, but installing the extras will give us a nice Sass framework off which to build: <br> `yo pattern-lab-starter:extras`

4. Those three (four) commands should be all you need to get up and running, but just in case:
`npm install && bower install && bundler install`

	**That command is the first thing you should run if you have any problems.**

5. Once everything is installed (and updated), pattern lab is started by invoking grunt:
`grunt`

Prototyping with Pattern Lab
----
After running `grunt`, your browser should be open to: `localhost:9005/pattern-lab/public`. What you are seeing is a working repository of your entire website, from individual components all the way to full pages. If you installed the extras, you'll be seeing even more. Take some time to search around the top menu to see components individually. 

For this walkthrough, we're going to build a page like this:
[screenshot of example page]

Let's break that page up into it's components (or patterns). Patterns can be any size, but a nice rule of thumb is if it can be (or will be) re-used on a different page, it's a good idea to make it a pattern. This will save you in the long run from repeatedly hard-coding the same pieces of markup. 

Our example page looks simple enough--- there's a header with navigation, a main content area, a sidebar, and a footer.

We'll start with the header. It can be broken down even further, into two patterns: a logo and a nav list. Our starter kit comes with pre-existing patterns for both of those, but we're going to make them ourselves to show how easy it is.