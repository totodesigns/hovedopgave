<script setup>
import IngredientImages from "../IngredientImages.json"

const props = defineProps({
  name: String,
  unit: String,
  tilbud: Boolean,
})

const normalizeKey = (str) => {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
}

const ingredientKey = normalizeKey(props.name);
const imgData = IngredientImages[ingredientKey];

const imageUrl = imgData ? imgData.image : null;
const tilbud = imgData ? imgData.tilbud : false;

const unit = props.unit || '';
const navn = props.name || '';
const correctName = imgData ? imgData.navn : props.name;

</script>

<template>
  <div class="ingredient-item">
    <div class="ingredient-image-wrapper">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="navn || 'Billede'"
        class="ingredient-image"
      />
    </div>
    <div class="ingredient-info">
        <div class="title-wrapper">
            <p class="base-strong">{{ correctName }}</p>
            <div v-if="tilbud" class="tilbud-sticker"><p class="sm-strong">Tilbudsvare</p></div>
        </div>
      <p style="color: var(--color-text-grey-default);">{{ unit }}</p>
    </div>
    <div class="close-icon-wrapper">
        <svg width="16" height="16" viewBox="0 0 24 24">
            <path class="i-str-black" d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
    </div>
  </div>
</template>

<style scoped>

.sm-strong {
    color: var(--color-text-black);
}

.tilbud-sticker {
    background-color: var(--color-surface-awareness-default);
    padding: 0px 4px;
    height: fit-content;
}

.ingredient-item {
    display: flex;
    gap: 8px;
    width: 100%;
}

.ingredient-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    flex-grow: 1;
}

.title-wrapper {
    display: flex;
    gap: 8px;
}

.title-wrapper > p {
    color: var(--color-text-black);
}

.ingredient-image-wrapper {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ingredient-image {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
}

.close-icon-wrapper {
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
