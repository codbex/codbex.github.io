---
layout: home

hero:
  name: News
  text: Company Updates

editLink: false
---

<script setup>
import { withBase } from 'vitepress'
import { data as posts } from '/data/news.data'
import getSorted from '/.vitepress/theme/utils/getSorted';

const sortedPosts = getSorted( posts );
</script>

<section class="blog-posts">
  <ul class="post-list">
    <li class="post-item" v-for="post of sortedPosts">
      <p class="post-meta">
        <img src="/logo.svg" alt="codbex" class="author-image-square" />
        <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span>
      </p>
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
