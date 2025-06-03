<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../firebase.js';

// Firebase realtime database initéres allerede et andet sted i dit projekt

const route = useRoute();
const recipeId = route.params.id;

const recipe = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const recipeRef = dbRef(database, `${recipeId}`);
    const snapshot = await get(recipeRef);

    if (snapshot.exists()) {
      recipe.value = snapshot.val();
    } else {
      error.value = 'Opskrift ikke fundet';
    }
  } catch (e) {
    error.value = 'Fejl ved hentning af opskrift: ' + e.message;
  }
});
</script>

<template>
  <div v-if="recipe">
    <h1>{{ recipe.navn }}</h1>
    <h2>{{ recipe.antalIngredienser }}</h2>
    <h2>{{ recipe.tidsestimat }}</h2>
  </div>
</template>
