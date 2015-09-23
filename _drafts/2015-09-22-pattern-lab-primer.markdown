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

## Prereqs, installation, setup
This walkthrough assumes your computer has node and ruby. If you're on a mac, ruby is preinstalled. If `node -v` returns something like `v0.10.xx`, you're all set. If not, visit [node.js](https://nodejs.org/en/){:target="_blank"}.

1. To keep this as simple as possible:
	`npm install -g generator-pattern-lab-starter`

2. Make a new directory to hold your pattern lab site. 
Once in that directory: `yo pattern-lab-starter`

 If `yo` isn't an available command, install [Yeoman](https://yeoman.io){:target="_blank"} using: `npm install -g yo`

3. This isn't required, but installing the extras will give us a nice Sass framework off which to build: `yo pattern-lab-starter:extras`

4. Those three (four) commands should be all you need to get up and running, but just in case: `npm install && bower install && bundler install`

	**That command is the first thing you should run if you have any problems.**

5. Once everything is installed (and updated), pattern lab is started by invoking grunt:
`grunt`

## Pattern Lab Structure

After running `grunt`, your browser should be open to: `localhost:9005/pattern-lab/public`. What you are seeing is a working repository of your entire website, from individual components all the way to full pages. If you installed the extras, you'll be seeing even more. Take some time to search around the top menu to see components individually. 

All of that is built out of this file structure we just generated with yeoman.
![](/assets/posts/pl-structure.png)

- The pattern-lab folder is what ultimately populates the dropdown menu at the top of localhost:9005. We don't edit anything in `pattern-lab/public` however. The real treasure is one folder lower, in `pattern-lab/source`. 
That folder holds all of our mustache templates, conveniently organized into their respective pattern type (atoms, molecules, organisms, templates, and pages). 

- The scss folder contains all of our Sass, also conveniently organized into various applications. This folder automatically compiles into the css folder at the top. Grunt also watches for changes in this folder to trigger the auto-refresh. See your stylistic changes instantly!

- The images folder is a standard top-level assets folder. The js folder is too.

- `bower_components` and `node_modules` are the packages required and installed by Pattern Lab. `grunt-tasks` are the packages required by the tasks specified in the Gruntfile. Other than running `grunt` to get things started, that's all outside the scope of this post. I recommend reading the documentation for Pattern Lab as well as Phase2's Pattern Lab Starter to really gain an understanding of what everything does.


For this walkthrough, there are only three folders we're concerned with: **pattern-lab**, **scss**, and **images**.


## Prototyping with Pattern Lab


We're going to build a page like this:
![](/assets/posts/amazon.png)

First, let's break that page up into it's components (or patterns). Patterns can be any size, but a nice rule of thumb is if it can be (or will be) re-used on a different page, it's a good idea to make it a pattern. This will save you in the long run from repeatedly hard-coding the same pieces of markup. 

![](/assets/posts/amazon-components.png)
Our example page looks simple enough--- there's a header with navigation, a main content area, a sidebar, and a footer [not pictured].

Our starter kit comes with pre-existing patterns for most of these, but we're going to tweak them a bit and build some of our own to really understand how it all works.

### Creating Components
Let's start by building a little "product" molecule. Naming things is the hardest part of pattern lab, because these patterns can and will be used all over your pages. What makes sense as a name in one context may be wildly out of place in another. Your pattern names should walk a fine line between being too generic or too specific.

### Turning atoms into molecules and organisms
### Combining parts to create templates
### Templates into specific pages