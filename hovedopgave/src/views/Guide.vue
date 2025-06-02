<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

import Guide1 from '../components/Guide1.vue'
import Guide2 from '../components/Guide2.vue'
import Guide3 from '../components/Guide3.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToGuide() {
  router.push('/guide')
}
const slides = [Guide1, Guide2, Guide3]

</script>

<template>
  <div class="guide-container">
    <swiper
      :pagination="{ clickable: true }"
      :space-between="50"
      :allow-touch-move="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(Component, index) in slides" :key="index">
        <component :is="Component" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
</style>
