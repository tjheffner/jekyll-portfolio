---
layout: post
title: "What We Talk About When We Talk About Pattern Lab"
date: 2015-09-29 00:00:00
---

## Prototyping

No matter what your developmental choices are, be they oriented for Drupal, Wordpress, Ruby, or any of the other myriad possibilities available to developers in 2015-- at the end of the day, what you see on the web boils down to HTML.

If we keep this simple fact in mind, the power of prototyping, particularly with Pattern Lab, quickly becomes clear.

First, what do we mean by prototyping?

**"Simple, rapid, iterative generation of HTML, CSS, Javascript, and other assets expressly for the purpose of informing - and consumption by - builds in more complex systems."**

The rapid, iterative generation of assets provides developers(/designers/teams/clients) with some enormous benefits. Pixel-perfect design comps are a wonderful starting point, but with the multitude of screen sizes available to users today, it's practically impossible to translate comps exactly to the web. That's where iteration comes in-- quickly see what works and what doesn't, across all aspects of the design.

* Solve problems early, before complex back-end dev
* Test UX early with real code
* Easily updateable designs
* Shared design vocabulary
* Front-end development is FAST
* Generate assets (CSS/JS/Icons) at STEP ONE
* Parallel development with "back-end"
* Roadmap for back-end development

All of those are important, but those last two are truly invaluable. Many current workflows have a division between front and back-end devs. Front end development can't truly begin until the complex backend structure is built and generating the html that needs to be stylized. Prototyping turns that division into a true partnership-- front-end developers can quickly generate simple HTML representations with real assets (CSS, JS, Icons, etc). While the back-end is being constructed, there are visible guidelines for what structures are needed and which classes need applied where. By following those guides, the CSS (and other assets) from the prototype are the exact same as the assets for the actual production site.

With all of that in mind, let's talk about Pattern Lab.

## Prototyping with Pattern Lab

Pattern Lab is, in my opinion, the ideal tool for front-end web development in 2015. It's really a collection of tools, including: a living style guide, a component library, a viewport resizer for easy testing among a variety of screen sizes, annotations, and an auto refresh tool. All of which combine to streamline front-end development.

* Implements Atomic Design at a code level
* Produces HTML and assets like CSS and JS
* Works locally, generates static, hostable code
* A full interface to navigate all prototypes
* Responsive tools built in [viewport resizer]
* Is un-opinionated about *how* those assets are written:
	* BEM, SMACSS, Sass/Less
	* Task runners: Grunt, Gulp​

The un-opinionated nature of Pattern Lab makes it trivial to add to your current workflow-- no need to learn new styles of writing code, Pattern Lab handles them all just the same.

With Pattern Lab, everyone on the team has access to everything– it’s very easy to see all design components at a glance and how they fit together, from basic styles and color palettes all the way through to full page mockups. This accessibility improves communication among various team members immensely. No more confusion about if you meant the `.header-logo--small` or the `.small-header_logo`.

Pattern Lab also makes editing trivial. Need to change a wrapper div around a button? Thanks to Pattern Lab's robust templating, fix it in one place, it’s fixed everywhere. No more hunting through umpteen different pages to make sure you didn’t miss one. Plus, the auto-refresh means you see all your changes instantly, ensuring things look exactly how they should.

As an added bonus, Pattern Lab can be hosted as a standalone styleguide & component library, or included as part of a larger theme in Drupal or Wordpress. If it's part of a theme, there is no duplication or moving of files required between Pattern Lab and the theme itself-- they share the exact same assets. Everything lines up perfectly. Because the assets used for the prototype are the same assets used for production, there is very little development time truly wasted by prototyping, but a whole host of efficient, cost-saving benefits.

## But really, why use Pattern Lab?
If you're still not convinced, I think the [Pattern Lab](http://patternlab.io) website explains it best:
![](/assets/posts/whypl.png)