<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  src: { type: String, required: true },
  fallback: { type: String, required: true },
  desc: { type: String, default: '' },
})

const reachable = ref(true)

onMounted(async () => {
  try {
    const response = await fetch(props.src, { method: 'HEAD' })
    reachable.value = response.ok
  } catch {
    reachable.value = false
  }
})
</script>

<template>
  <article class="frame-card">
    <header class="frame-card-header">
      <div class="frame-card-heading">
        <h3>{{ title }}</h3>
        <p v-if="desc" class="frame-card-desc">{{ desc }}</p>
      </div>
      <a class="frame-open" :href="src" target="_blank" rel="noopener noreferrer">Open in new tab</a>
    </header>

    <iframe v-if="reachable" class="frame-preview" :src="src" :title="title" loading="lazy"></iframe>
    <img v-else class="frame-preview frame-fallback" :src="fallback" :alt="title" loading="lazy" />
  </article>
</template>

<style scoped>
.frame-card {
  overflow: hidden;
}

.frame-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;
}

.frame-card-header h3 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.frame-card-heading {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
  flex: 1;
}

.frame-card-desc {
  margin: 0;
  font-size: 0.813rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.frame-open {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-button-brand-text) !important;
  background: var(--vp-button-brand-bg);
  transition: background-color 0.2s;
}

.frame-open::after {
  content: '↗';
  font-size: 13px;
  color: var(--vp-button-brand-text) !important;
}

.frame-open:hover {
  background: var(--vp-button-brand-hover-bg);
}

.frame-preview {
  display: block;
  width: 100%;
  height: 648px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

.frame-fallback {
  object-fit: cover;
  object-position: top;
}

@media (max-width: 640px) {
  .frame-preview {
    height: 520px;
  }

  .frame-card-header {
    flex-wrap: wrap;
  }
}
</style>
