---
layout: home

hero:
  name: News & Updates
  text: Explore What’s New and Next
  tagline: Discover our latest innovations, milestones, and insights as we continue to shape the future of technology and business excellence
  image:
      src: /images/styled/goddess-reading-book.svg

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
        <img src="/icon.svg" alt="codbex" class="author-image-square" />
        <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span>
      </p>
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
