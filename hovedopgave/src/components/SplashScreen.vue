<template>
  <ion-page class="splash-screen">
    <ion-content :fullscreen="true">
      <div class="splash-container">
        <img src="../assets/images/logo_foetexplus.png" alt="Splash Logo" class="splash-logo" />
        <p class="splash-text">Inspiration til dig</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue'
</script>

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
  color: var(--ion-color-text-default);
  font-family: var(--font-heading-3xl);
  font-size: var(--font-heading-3xl-size);
  font-weight: var(--font-heading-3xl-weight);
  line-height: var(--font-heading-3xl-line-height);
}
</style>
