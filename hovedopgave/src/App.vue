<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<template id="page-wrapper">
  <SplashScreen v-if="showSplash" />
  <router-view v-else /> <!-- DO NOT TOUCH THIS -->
</template>

<style scoped>
#page-wrapper {
  height: 100%;
}
</style>