---
layout: home

hero:
  name: Marketing
  text: Opportunities

editLink: false
---

<script setup>
import { withBase } from 'vitepress'
import { data as posts } from '/data/marketing.data'
import getSorted from '/.vitepress/theme/utils/getSorted';
import { getMember } from '/.vitepress/theme/utils/membersUtils';

const sortedPosts = getSorted( posts );
</script>

<section class="blog-posts">
  <ul class="post-list">
    <li class="post-item" v-for="post of sortedPosts">
      <p class="post-meta">
        <img :src="withBase(getMember(post.frontmatter.author).avatar)" alt="{{ getMember(post.frontmatter.author).name }}" class="author-image" />
        <span class="post-author">{{ getMember(post.frontmatter.author).name }}</span>&nbsp;&nbsp;
        <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span>
      </p>
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
