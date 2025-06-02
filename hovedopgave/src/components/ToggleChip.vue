<script setup>
    defineProps({
    modelValue: Boolean
    })
    defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="chip"
    :class="{ active: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <slot />
  </div>
</template>

<style scoped>
.chip {
    display: flex;
    height: 32px;
    width: fit-content;
    padding: 0px 8px;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    background-color: var(--color-surface-white);
    font-family: 'Fotext-Regular';
}

.chip.active {
  background-color: var(--color-surface-default);
  color: var(--color-text-white);
}
</style>
