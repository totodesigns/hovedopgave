<script setup>
import { ref, computed } from 'vue'
import Onboarding1 from '../components/Onboarding1.vue'
import Onboarding2 from '../components/Onboarding2.vue'
import Onboarding3 from '../components/Onboarding3.vue'

const slides = [Onboarding1, Onboarding2, Onboarding3]
const currentSlide = ref(0)
const direction = ref('next')

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

 <main class="page-wrapper">
    <header class="top-bar">
      <button @click="goBack" class="icon-btn" aria-label="Tilbage">
        <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-black" d="M15 19L8 12L15 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </button>
    </header>

    <div class="onboarding-container">
    <transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
      <component :is="currentComponent" :key="currentSlide" @next="next" @prev="prev" />
    </transition>
    </div>
  </main>
</template>

<style scoped>
.onboarding-container {
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

main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  height: fit-content;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: none;
}

.icon-btn {
  margin: 0;
  padding: 0;
}

</style>