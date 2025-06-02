<script setup>
import { ref, computed } from 'vue'
import Guide1 from '../components/Guide1.vue'
import Guide2 from '../components/Guide2.vue'
import Guide3 from '../components/Guide3.vue'

const slides = [Guide1, Guide2, Guide3]
const currentSlide = ref(0)
const direction = ref('next') // or 'prev' for animation

const currentComponent = computed(() => slides[currentSlide.value])

function next() {
  if (currentSlide.value < slides.length - 1) {
    direction.value = 'next'
    currentSlide.value++
  }
}

function prev() {
  if (currentSlide.value > 0) {
    direction.value = 'prev'
    currentSlide.value--
  }
}
</script>

<template>
  <div class="guide-container">
    <transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
      <component :is="currentComponent" :key="currentSlide" @next="next" @prev="prev" />
    </transition>
  </div>
</template>

<style scoped>
.guide-container {
  position: relative;
  overflow: hidden;
}

/* Slide Left (Next) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide Right (Prev) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
