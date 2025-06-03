<script setup>
    import { computed } from 'vue'

    const props = defineProps({
      modelValue: Array,  // Array of selected allergens
      value: String        // The allergen this chip represents
    })
    
    const emit = defineEmits(['update:modelValue'])

    const isSelected = computed(() => {
      return Array.isArray(props.modelValue) && props.modelValue.includes(props.value)
    })


    const toggle = () => {
      const updated = isSelected.value
      ? props.modelValue.filter(item => item !== props.value)
      : [...props.modelValue, props.value]

    emit('update:modelValue', updated)
}
</script>

<template>
  <div
    class="chip"
    :class="{ active: isSelected.valueOf() }"
    @click="toggle"
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
    cursor: pointer;
}

.chip.active {
  background-color: var(--color-surface-default);
  color: var(--color-text-white);
}
</style>