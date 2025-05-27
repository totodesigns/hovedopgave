<script setup>

</script>

<template>
  <header>
    <div class="splash-screen">
        <div class="splash-container">
          <img alt="Vue logo" class="splash-logo" src="../assets/images/logo_foetexplus.png" width="125" height="125" />
          <p class="splash-text">Inspiration til dig</p>
        </div>
    </div>
  </header>
</template>

<style scoped>
.splash-screen {
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-container {
  background-color: var(--color-surface-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.splash-logo {
  width: 210px;
  height: auto;
}

.splash-text {
  color: var(--color-text-default);
  font-family: var(--font-heading-3xl);
  font-size: var(--font-heading-3xl-size);
  font-weight: var(--font-heading-3xl-weight);
  line-height: var(--font-heading-3xl-line-height);
}
</style>
