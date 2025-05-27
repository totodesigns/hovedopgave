<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from '@/components/SplashScreen.vue'
import LoginScreen from '@/components/LoginScreen.vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<template>
  <div>
    <SplashScreen v-if="showSplash" />
    <LoginScreen v-else />
  </div>
</template>

