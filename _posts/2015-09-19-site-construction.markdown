---
layout: post
title:  "Building the site: why I chose Jekyll"
date:   2015-09-19 00:00:00
categories: jekyll blog update
---

When a friend recommended [Jekyll](http://jekyllrb.com){:target="_blank"}, I bookmarked it and forgot about it. But, as I skimmed through the documentation absentmindedly a few times, there was more than enough to convince me that Jekyll was worth checking out. Not only is Jekyll basically the perfect/ideal self-hosted blog, due to the simple file structure, local management, and the immense synergy with github.... it also has the ability to easily create its own collections that work using the same robust template structure as the blog workings. Just what I needed!

Here's a rough walkthrough of how I built my site:

First, ignored the blog until later-- I knew this worked out of the box, and I was more concerned with getting my projects displayed and running.

Content-wise, Jekyll comes included with posts, pages, drafts. Posts and pages are nice, but I wanted projects. Posts are used by the blog, so I didn't want to touch them. Pages I interpreted as being generic site pages. I probably could have used them to contain my projects, but that would hardly be worth it. So I created a collection.

Jekyll gives you the ability to define your own collections in the `_config.yml` file. be sure to set `output: true` if you want Jekyll to publish the files in your collection folder. Mine is called projects, so the folder is `_projects`.

![](/assets/posts/config.png)

If it isn't set to true, Jekyll won't compile them into the built site. I guess this is a way to define your own drafts as well, but I use `_drafts` for everything currently. You can also make things drafts by not including the Front Matter at the beginning of each file. Sorry I haven't explained what that is either, I said this is a rough walkthrough and the [Jekyll documentation](http://jekyllrb.com){:target="_blank"} is like, right there.

Anyway, so I have my collection built. Time to start adding projects! Each project gets its own markdown file. This one is located at `jekyll/_projects/blink-of-an-eye.markdown`

    ---
    title: "in the blink of an eye"
    categories: design, development, illustration
    layout: project
    thumbnail: "/assets/thumbnails/blinkofaneye.png"

    ---


    **Challenge:** How do you design an interactive visualization that captivates from one data point to over two billion?

    I graduated in the summer of 2014. It felt like my college experience went by in the blink of an eye.

    How long is a blink? _(330 milliseconds)_

    How many blinks was college really? _(approximately 2,096,639,997 blinks, give or take a few)_

    Why did they go so fast? _(don't say time flies when you're having fun don't say time flies when you're_




    <iframe width="960" height="540" src="//www.youtube.com/embed/xxruyBiSb3M?rel=0" frameborder="0" allowfullscreen></iframe>
    <br>
    Each trail spawned represents one 'blink,' and new blinks spawn every 330ms.



    <br>
    Check the code on <a href="https://github.com/tjheffner/blink" target="_blank">github.</a>
    <i>Requires <a href="http://processing.org/" target="_blank">Processing</a> to run.</i>__


Okay.

This was the first project I added, because I felt it was the least complex (at least to display). Let's break down this wall of text. In between the --- 's at the top is the YAML Front Matter. **This is basically the black magic that makes Jekyll work as well as it does.** Every file (except Sass partials & whatever assets) needs front matter to render. I think at the bare minimum it needs a title and a layout value. But you can add any values you like. I added thumbnail because I needed each project to have one for the homepage. To make that work, I created an assets folder where I'm keeping most of my images, javascript libraries, and the like.

You'll notice this file has both markdown and HTML syntax. That's totally valid in Jekyll. The whitespace all gets trimmed in the end, I include it in my files for readability. If you need whitespace, throw some `<br>`'s on it.

Once I verified this worked relatively properly, I began adding markdown files for other projects that didn't need code assets in the same manner.

Remember I said "most" of my stuff was kept in assets? When it came to the projects that needed code assets in order to be fully functional, I found if I just moved their whole project folders into the top-level `jekyll/project-name`, as long as they had an index.html, the project would render properly, even without the front matter. Then I just included a link in their respective project markdown files like this:
`<a href="{{ site.url }}/project-name" target="_blank">Play it here!</a>`

It was that simple. If your project is built with PHP however, Jekyll can't do anything with it. I found that out the hard way after trying to get a cute little rock paper scissors app to render for the better part of an hour. I don't make the rules. Sorry.

Anyways, the other "big" part in the construction of this website were the slideshows, currently present on [double scribble]({{site.url}}/projects/double-scribble.html) and [building blocks]({{site.url}}/projects/building-blocks.html). This is where I used a neat little trick, [found here,](http://mattgemmell.com/page-specific-assets-with-jekyll/){:target="_blank"} to load jQuery on these pages only for custom slideshow functionality.

To make the blog work, I added a few lines into the `config.yml` (look at lines 20-29 in the picture at the top of this page). Those lines make pages follow the same layout rules as my projects (title only, no navbar header or anything), and sets the page that lists all of them to /blog/ instead of /. The last thing to make that work properly was to create `jekyll/blog.md`

A markdown file in the top-level is how you make the third default content type, pages.

![](/assets/posts/blogmd.png)


One thing I forgot to mention-- these files all mention layout: project, which is a custom layout. It mostly contains wrapper classes around the content. The real hero of my website is the custom layout that the project layout references: `_layouts/homepage.html`. I didn't like how the top of the default layout looked with the title and the nav bar, but I really liked the starting point of the footer, so I made my own layout (called homepage) the exact same as the default, minus the stuff up top. Because everything uses the project layout, everything uses the homepage layout. Hooray for nesting!

And with that said, you have a fully functioning, easily maintainable & updateable website stored right on your computer.
I followed the guide in the documentation to host mine through github-pages for free and then promptly canceled the webhosting I was using. It's that simple!

[See what my entire repo looks like here.](https://github.com/tjheffner/tjheffner.github.io)
