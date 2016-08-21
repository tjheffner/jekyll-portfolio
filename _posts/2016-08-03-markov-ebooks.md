---
layout: post
title:  "Markov Chain Twitter Bot"
date:   2016-08-6 03:22:00
categories: twitter ruby heroku markov chain
---

Thanks to [this tutorial](http://blog.boodoo.co/how-to-make-an-_ebooks/) and my nearly 15,000 tweets (holy shit, when did that happen?), I now have a nonsensical, yet occasionally profound, twitter_ebooks bot to call my own. It was actually a whole lot simpler to set up than I thought it would be-- creating a dummy email, new twitter account, and setting up [Heroku](https://www.heroku.com/) for the first time with all their various authentication processes took longer than actually setting up the [bot's code](https://github.com/tjheffner/food_libs/blob/master/bots.rb).

For now, my bot spits out tweets based on the contents of my actual twitter archive using a Markov chain. A Markov chain is "_a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event._" What that means in this context is that my bot will never immediately repeat a tweet. Each tweet is randomly constructed from the grammar and syntactical structure of my actual tweets, by starting with a random-length fragment from anywhere in my archived tweets. I added some logic to vary the construction patterns to ensure it wasn't always copying past tweets word for word. It does _occasionally_ tweet fragments word-for-word from my past tweets, as a fallback if the tweet that was originally constructed exceeds the character limit.

All in all, it's got me excited to play around with Ruby, and more advanced twitter bots in general. I'm particularly interested in exploring avenues involving randomized image manipulations once I find the time.

For now, you can follow the occasionally profound mutterings of my spambot here: [@food_libs](http://www.twitter.com/food_libs).
