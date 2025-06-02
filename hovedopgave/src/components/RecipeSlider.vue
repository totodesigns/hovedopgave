<script setup>
import RecipeCard from './RecipeCard.vue';

const props = defineProps({
  recipes: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div v-if="recipes.length" class="slider">
    <div class="cards">
      <RecipeCard v-for="(recipe, index) in recipes" 
                  :key="index" 
                  :recipe="recipe" />
    </div>
  </div>
</template>

<style scoped>
  .cards {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-top: 8px;
  }
</style>
