<script setup>
import { ref, onMounted } from 'vue'
import LoginScreen from './views/LoginScreen.vue'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<template>
  <SplashScreen v-if="showSplash" />
  <router-view v-else /> <!-- DO NOT TOUCH THIS -->
</template>

<style scoped>
</style>