<script setup>

</script>

<template>
  <div class="splash-screen">
    <img alt="Vue logo" class="splash-logo" src="../assets/images/logo_foetexplus.png" width="125" height="125" />
    <h1>Inspiration til dig</h1>
  </div>
</template>

<style scoped>
.splash-screen {
  background-color: var(--color-surface-background);
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.splash-logo {
  width: 210px;
  height: auto;
  margin-bottom: 24px;
}
</style>
