<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from '../components/SplashScreen.vue'
import Login from '../components/Login.vue'

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
    <Login v-else />
  </div>
</template>