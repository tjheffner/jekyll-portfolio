---
layout: project
title: blog
permalink: /blog/
order: 2
---

<div class="home">

  <ul class="post-list">
    all posts
    <br>
    {% for post in site.posts %}
      <li>

          <div class="post-links">
            <a href="{{ post.url | prepend: site.baseurl }}"> >> {{ post.title }} </a>
          </div>

      </li>
    {% endfor %}
  </ul>

</div>
