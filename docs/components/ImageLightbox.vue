<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const open = ref(false)
const src = ref('')
const alt = ref('')
const closeButton = ref(null)

let trigger = null

function resolve(target) {
  const img = target?.closest?.('img.img-preview')
  if (!img || img.closest('a')) return null
  return img
}

function show(img) {
  trigger = img
  src.value = img.currentSrc || img.src
  alt.value = img.alt || ''
  open.value = true
  nextTick(() => closeButton.value?.focus())
}

function close() {
  if (!open.value) return
  open.value = false
  trigger?.focus()
  trigger = null
}

function onClick(event) {
  const img = resolve(event.target)
  if (!img) return
  event.preventDefault()
  show(img)
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    close()
    return
  }
  if (event.key !== 'Enter' && event.key !== ' ') return
  const img = resolve(event.target)
  if (!img) return
  event.preventDefault()
  show(img)
}

// Images are authored as plain <img> tags, so make them reachable by keyboard.
function enhanceImages() {
  document.querySelectorAll('img.img-preview').forEach((img) => {
    if (img.closest('a')) return
    img.setAttribute('tabindex', '0')
    img.setAttribute('role', 'button')
  })
}

onMounted(() => {
  document.addEventListener('click', onClick)
  document.addEventListener('keydown', onKeydown)
  enhanceImages()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClick)
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.classList.remove('img-lightbox-open')
})

watch(open, (value) => {
  document.documentElement.classList.toggle('img-lightbox-open', value)
})

watch(
  () => route.path,
  () => {
    close()
    nextTick(enhanceImages)
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="img-lightbox">
      <div
        v-if="open"
        class="img-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="alt || 'Image preview'"
        @click="close"
      >
        <button
          ref="closeButton"
          class="img-lightbox-close"
          type="button"
          aria-label="Close image preview"
          @click="close"
        >
          &times;
        </button>
        <img class="img-lightbox-image" :src="src" :alt="alt" @click.stop />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.img-lightbox {
  position: fixed;
  inset: 0;
  /* above the cookie banner (z-index 9999 in theme/utils/cookie-banner.js) */
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  cursor: zoom-out;
}

.img-lightbox-image {
  width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  cursor: default;
  transition: transform 0.2s ease;
}

.img-lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  font-size: 1.5rem;
  line-height: 1;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;
}

.img-lightbox-close:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
}

.img-lightbox-enter-active,
.img-lightbox-leave-active {
  transition: opacity 0.2s ease;
}

.img-lightbox-enter-from,
.img-lightbox-leave-to {
  opacity: 0;
}

.img-lightbox-enter-from .img-lightbox-image,
.img-lightbox-leave-to .img-lightbox-image {
  transform: scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .img-lightbox-enter-active,
  .img-lightbox-leave-active,
  .img-lightbox-image {
    transition: none;
  }

  .img-lightbox-enter-from .img-lightbox-image,
  .img-lightbox-leave-to .img-lightbox-image {
    transform: none;
  }
}
</style>
