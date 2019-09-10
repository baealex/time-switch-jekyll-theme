---
layout: default
---
<div class="post-list">
  <h1>Posts List</h1>
  <ul>
    {% for post in site.posts %}
    <li>
      <h3>
        <a href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
    {% endfor %}
  </ul>
</div>