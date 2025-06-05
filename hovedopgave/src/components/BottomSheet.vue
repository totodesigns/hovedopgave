<script setup>
defineProps({
  isOpen: Boolean,
  close: Function,
})
</script>

<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div v-if="isOpen" class="overlay" @click="close"></div>
  </Transition>

  <!-- Bottom Sheet -->
  <Transition name="slide-up">
    <div v-if="isOpen" class="bottom-sheet">
      <div class="handle"></div>
      <div class="sheet-content">
        <slot />
        <a @click="close">
            Annullér
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>

a {
    color: var(--color-text-black);
    margin-top: 16px;
}

.sheet-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: transform 0.3s cubic-bezier(0.25, 0.63, 0, 1);
}

 .slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(1, 0, 0.7, 0.38);
}

.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
}

/* UI styles */
.overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 9;
}

.bottom-sheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    padding: 8px 24px 24px 24px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
}

.handle {
    width: 40px;
    height: 5px;
    background-color: #ccc;
    border-radius: 3px;
    margin: 0 auto 28px auto;
}

.close-btn {
    margin-top: 20px;
    background: #ccc;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
}

</style>
