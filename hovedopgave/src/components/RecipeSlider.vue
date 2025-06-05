<script setup>
import RecipeCard from './RecipeCard.vue';

const props = defineProps({
  recipes: {
    type: Array,
    default: () => []
  }
});

// Her bruger vi opskrifternes index i databasen som ID.
// Mest fleksibelt til fremtiden med 500+ potentielle opskrifter!
const recipesWithId = props.recipes.map((r, index) => ({
  id: index.toString(),
  ...r
}));

</script>

<template>
  <div v-if="recipes.length" class="slider">
    <div class="cards">
      <RecipeCard 
        v-for="recipe in recipesWithId" 
        :key="recipe.id" 
        :recipe="recipe" 
      />
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
