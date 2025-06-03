<script setup>
import { ref, computed } from 'vue'
import Guide1 from '../components/Guide1.vue'
import Guide2 from '../components/Guide2.vue'
import Guide3 from '../components/Guide3.vue'

const slides = [Guide1, Guide2, Guide3,]
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

 <main class="page-wrapper">
    <header class="top-bar">
      <button @click="goBack" class="icon-btn" aria-label="Tilbage">
        <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-black" d="M15 19L8 12L15 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </button>

      <div class="logo-container">
        <img src="../assets/images/logo_foetexplus.png" alt="føtex plus logo" class="top-barlogo" />
        <p class="logo-text sm-strong">Opskrifter</p>
      </div>

      <a class="skip" @click="skip">Skip</a>
    </header>

    <div class="guide-container">
    <transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
      <component :is="currentComponent" :key="currentSlide" @next="next" @prev="prev" />
    </transition>
    </div>
    
    <nav class="pagination" aria-label="Pagination indikator">
      <span
        v-for="(step, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === currentSlide }"
      ></span>
    </nav>
  </main>
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

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-barlogo {
  width: 76px;
  height: auto;
}

.logo-text {
  margin-top: 6px;
}

.icon-btn {
  margin: 0;
  padding: 0;
}

</style>