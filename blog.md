---
layout: project
title: all posts
permalink: /blog/
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      <li>

          <div class="post-links">
            <a href="{{ post.url | prepend: site.baseurl }}"> >> {{ post.title }} </a>
          </div>

      </li>
    {% endfor %}
  </ul>

</div>
