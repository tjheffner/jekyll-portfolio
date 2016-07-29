## Building the Pattern Lab Workshop
***Tanner Heffner***


*This post is nominally about Pattern Lab, but is primarily concerned with the node.js Workshop side of things.*

### Background
As an intern fresh out of a local coding bootcamp, I was included in a meeting with Robbie Holmes, Chris Bloom, and Evan Lovely about [Pattern Lab](http://patternlab.io). They tasked me with building some sort of internal training module that would explain the concepts to people across Phase2, not just front-end developers. The other key requirement was that it should be done in the "workshopper" format, popularized by [nodeschool.io](http://nodeschool.io). Pattern Lab is a fairly complex [not complicated] system with many moving parts, and the workshopper format is very good at one thing-- being a terminal-based test runner for [node.js](http://nodejs.org). How to combine the two?

 Most of the tools Pattern Lab provides are best viewed in a browser, not the terminal. Plus, as a rapid prototyping tool, Pattern Lab (to me) feels more concerned with CSS and HTML markup than Javascript. Fixed terminal output seemed worlds removed from a responsive browser window. This changed the problem from "How to explain Pattern Lab?" to "How to explain atomic design (through Pattern Lab's lens)?". Good question. Workshoppers presented plenty of their own challenges, as I soon discovered.

There are two popular workshopper packages that most of the nodeschool.io curriculum are based on:

* stream-adventure
* workshopper

Stream-adventure is the "original" (as far as I know) node.js terminal test-runner. Workshopper builds on the concepts from stream-adventure, adds functionality, and is maintained by a larger group of people, including the authors of stream-adventure.

I picked the 'workshopper' package for obvious reasons, but it wasn't long before I hit my first wall. I found that the `verify` function, one of the most key components for the workshopper format, because it is the command that checks your answer to the test("lesson") it is running, wouldn't correctly test & display HTML or CSS instead of javascript code. After beating my head against this wall for a while, I started looking for other options. 

My search led me to a fork of workshopper, workshopper-jlord. This fork had its fair share of changes but the most valuable thing, an improved `verify` function, far outweighed the annoyances. So I made a new branch and started from scratch with this as my base.

### Workshop Components
The entire [Pattern Lab Workshop](https://www.npmjs.com/package/pattern-lab-workshop) was essentially built with four things:

* workshopper-jlord	
	* I ended up making some patches to this which I will cover, but I don't think they'll be implemented because she's moving the wonderful [git-it](https://github.com/jlord/git-it) workshop from the terminal to a desktop app.
* fs/path modules
	* Real stars of the show.
* nested callbacks
	* There are so many different ways notation-wise to actually write these things, it was hard to keep straight at first.
* Lin Clark's amazing post on [Authoring Node.js workshopper lessons](http://lin-clark.com/blog/2014/07/01/authoring-nodejs-workshopper-lessons/).
	* Despite all of the incredibly varied workshoppers present on nodeschool, documentation surrounding is still surprisingly slim. Without this post I would have been dead in the water before I even started. 	

Workshoppers still seem wonky to me, so the easiest way to explain how they (& Pattern Lab Workshop) works is to just dive right in. Let's look at the first lesson, found [here](https://github.com/phase2/pattern-lab-workshop/tree/master/problems/create_an_atom).

A standard workshopper lesson has 4 files:

* **problem.md** - Explanation text loaded at the beginning of every test.
* **setup.js** - Required by workshopper to make commands work (`verify` `run`). 
* **verify.js** - Steps needed to run the solution / verify the solution is correct.
* **solution.js** - What a correct answer should return.

Our lesson has a bonus file:

* **example.html** - Result of one of the patches for workshopper-jlord, creating an easy way to display just about anything you need in the terminal window. It's essentially a more literal solution.js.

For our purposes, we can ignore **setup.js**. setup.js is the same in every problem and doesn't do anything terribly interesting. Take a quick peek at **problem.md** for some context to what verify is doing. **Example.html** is our answer to the steps outlined in problem.md.

That leaves **solution.js** and **verify.js**. 
	
### Building the Workshop

Simply put, Pattern Lab Workshop is built around verify.js searching for the contents of a specific file in a specific directory. It does that by using the fs and path modules and several nested callbacks.

Let's see just how that works.

```verify.js
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var filename = "01-tutorial-button.mustache";

//check the directory exists
//check the file exists
//verify the contents of the file

findFile();
```

The first three lines are specific modules required. There are the fs and path modules we've heard so much about. `require('child_process').exec;` is the workshopper/terminal window. Also, we declare a filename to search for-- the user is given the name and path and contents in **problem.md**.

`findFile();` is the starting function of the callbacks. It does this:

```verify.js
function findFile() {
  if (process.cwd().match("atoms")) {
    check(process.cwd())
  } else {
    check(path.join(process.cwd(), "/atoms/"))
  }

  function check(userspath) {
    fs.readdir(userspath, function(err, files) {
      if (err) {
        return console.log(err);
      }
      var allFiles = files.join();
      if (allFiles.match(filename)) {
        console.log("File in atoms folder!");
        checkFile();
      }
      else {
        console.log("File NOT in atoms folder!");
      }
    })
  }
}
```

First, it makes sure that we're in or immediately above a folder called /atoms/ by calling another function `check`. The `console.log()`'s are my workaround for workshopper limits. Due to the way workshopper(/-jlord)'s core `verify` function works, *some* javascript needs to be output to the terminal. By limiting that javascript to confirmations that something *exists* as it should, I avoided that problem.

The above code block has one more function called, `checkFile();` that introduced another set of problems.

```verify.js
function checkFile() {
  fs.readFile(path.join(process.cwd(), "/atoms/" + filename), 'utf8', function (err,data) {
    if (err) {
      console.log("Try running the verify command from the top-level folder of this project.");
      return console.log(err);
    }
    else {
      if (data.indexOf('<btn>') > -1 || data.indexOf('<button>') > -1) {
        console.log('There\'s a button!');
      }
      if (data.indexOf('{{ btnText }}') > -1) {
        console.log('Mustache partial present!');
      }
    }
  });
}
```

Using the [fs module](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readfile_file_options_callback) it tries to get the data from `/this-project/atoms/01-tutorial-button.mustache`. If it can't it provides a message to check your directory. 

If the file's found, it performs simple string searches on the contents, console logging away if it likes what it finds.

These `console.log()`s are compared with the correct sequence located in **solution.js**. If they match, congratulations, you've passed!

All of the lessons' **verify.js** behave similarly, some checking multiple files, others for CSS or JSON. The files are read in the same way.

### Minor Tweaks / Patches
The "last" thing to do was to make some updates to the workshopper-jlord package in order to fix minor issues I couldn't affect in the pattern-lab-workshop package itself. 

The reason for this is because the workshopper from workshopper-jlord would print out two or three lines about git-it after every command was run, which is great if you’re doing the git-it workshop but not so hot for anything else. This also meant I had to create another new repo to go with my fork of workshopper-jlord-- a fork of the workshopper package jlord was based on, an older version of workshopper she had forked. After sorting that out, I tweaked it a bit so the lines it printed out were fully customizable at the custom-workshop level, not the core workshopper level.

I did this using another node module called lodash and a new json file. I probably could have kept that json in the existed package json, but I wanted it to be very clear where it was editable. It's called `strings.json`.

The other update I made was allowing for an example file to be printed after each lesson. Workshopper and workshopper-jlord both allowed for this already, but they only worked if it was javascript, because it came from **solution.js**. And this conflicted with the way I needed the verify function to behave (comparing console logs instead of returned values). 

My answer was to have it call a an entirely new file so there could be no conflicts with **solution.js**. This way it can still do everything it wants with **solution.js**, and if it finds an **example.html** file, it'll spit that out too. If not, continues as normal.

That all happens in `workshopper.js` on my fork of workshopper.

```workshopper.js
function onpass (setup, dir, current) {
  console.log(bold(green('# PASS')))
  console.log(green(bold('\nYour solution to ' + current + ' passed!')))
  ...
  
  else {
          // trying to show our example
          console.log(repeat('-', this.width))
          console.log('Here\'s what our solution looks like:' + '\n')

          var example = fs.readdirSync(dir).filter(function (file) {
            return (/^example.*\.html/).test(file)
          }).map(function (file) {
              shell.echo(fs.readFileSync(path.join(dir, file), 'utf8'))
              //    .toString()
              //     .replace(/^/gm, '  ')
            }
          )

          console.log(repeat('-', this.width) + '\n')
          console.log(
              'You have '
            + remaining
            + ' challenge'
            + (remaining != 1 ? 's' : '')
            + ' left.'
          )
          console.log('Type `' + this.name + '` to show the menu.\n')
          console.log(repeat('-', this.width) + '\n')
        }
```

Not the most readable thing in the world, but it's pretty much wholesale the solution.js output earlier in the function. The main differences are this file outputs using the shell module, because it echos to the terminal perfectly, keeping spacing and tabs in place. I thought that was a great benefit when outputting our example markup, keeping things nice and readable. 

### Open Source / Closing Thoughts
Pattern Lab Workshop was developed from August 5th to Sept 28, about two months from that first meeting to release. It was published to [npm](http://npmjs.com/package/pattern-lab-workshop) and then added to [Nodeschool's curriculum](http://nodeschool.io). Brad Frost (one creator of Pattern Lab) sent out a [tweet](https://twitter.com/brad_frost/status/659824806708305920) that even got retweeted by Smashing Magazine. That was pretty wild to me.

I really enjoyed creating this workshop and pretty thrilled my first contribution to the open source community went so well. It was incredibly valuable for me as a new developer to be given the time & trust to just figure it out. There were some helpful nudges (and more explanations of nested callbacks) but for the most part I was given the opportunity to really poke around on my own and explore two new technologies I had never touched before (node.js and Pattern Lab). 

When I was building this, the npm version of Pattern Lab was still under heavy development. At some point, I'd like to revisit this workshopper and include the node version of Pattern Lab as originally conceived in that first meeting. It was implausible then but now seems like a real possibility. That would come with a whole host of bonuses like clearer folder structure & examples, and would include the ability to see how Pattern Lab works locally in the browser while still running the workshop. And what better way to learn than by touching all the buttons?