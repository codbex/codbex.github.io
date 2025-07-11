---
layout: home

hero:
  name: Technology Hub
  text: Your Guide to Mastering Innovation
  tagline: Dive into detailed user guides, tutorials, and best practices that empower you to leverage our cutting-edge technologies with confidence and ease
  image:
      src: /images/styled/god-with-book.svg

editLink: false
---

<script setup>
import { withBase } from 'vitepress';
import { data as posts } from '/data/technology.data';
import getSorted from '/.vitepress/theme/utils/getSorted';
import { getMember } from '/.vitepress/theme/utils/membersUtils';

const sortedPosts = getSorted( posts );
</script>

<section class="blog-posts">
  <ul class="post-list">
    <li class="post-item" v-for="post of sortedPosts">
<p class="post-meta">
  <template v-if="Array.isArray(post.frontmatter.author)">
    <span
      v-for="(authorId, index) in post.frontmatter.author"
      :key="authorId"
      class="post-author"
    >
      <img
        :src="getMember(authorId).avatar"
        :alt="getMember(authorId).name"
        class="author-image"
      />
      {{ getMember(authorId).name }}
      <span v-if="index < post.frontmatter.author.length - 1">,&nbsp;</span>
    </span>
  </template>
  <template v-else>
    <span
      class="post-author"
    >
      <img
        :src="getMember(post.frontmatter.author).avatar"
        :alt="getMember(post.frontmatter.author).name"
        class="author-image"
      />
      {{ getMember(post.frontmatter.author).name }}
    </span>
  </template>
  <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span>
</p>
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
