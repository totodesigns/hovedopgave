<script setup>
import { ref, computed, onMounted } from 'vue';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../firebase';

import ToggleChip from '../components/ToggleChip.vue'
import HeaderBar from '../components/HeaderBar.vue';
import RecipeSlider from '../components/RecipeSlider.vue';

const searchQuery = ref('');
const recipes = ref([]);

onMounted(async () => {
  const snapshot = await get(dbRef(database, '/'));
  if (snapshot.exists()) {
    recipes.value = Object.values(snapshot.val());
  } else {
    console.log("lol");
  }
});

const filteredRecipes = computed(() => {
  if (!searchQuery.value) return [];
  return recipes.value.filter(recipe =>
    recipe.ingredienser?.some(ingredienser =>
      ingredienser.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );
});

const isOn = ref(false)

</script>

<template>
  <div class="page-wrapper">
    <HeaderBar v-model:search="searchQuery" />

    <p class="base-strong">Opskrifter til dig</p>
    <!-- Vis RecipeSlider kun hvis der er en søgning -->
    <RecipeSlider v-if="searchQuery" :recipes="filteredRecipes" />
    <div class="empty-content" v-else>
      <p class="centered-text">Hvad har du i køleskabet i dag?</p>
      <button class="primary">
        <div class="icon-wrapper">
          <svg width="24" height="25" viewBox="0 0 24 25">
              <path class="i-fill-white" d="M14.084 4.34698C14.4421 4.36904 14.7919 4.46821 15.1094 4.638C15.4269 4.80787 15.7037 5.04364 15.9209 5.32941L16.0098 5.45441V5.45538L16.8213 6.67413H16.8223C16.9593 6.87947 17.1447 7.04793 17.3623 7.16437C17.58 7.28081 17.8234 7.34214 18.0703 7.3421H19C19.663 7.3421 20.2987 7.60568 20.7676 8.07452C21.2364 8.54336 21.5 9.17906 21.5 9.8421V18.8421C21.5 19.5051 21.2364 20.1408 20.7676 20.6097C20.2987 21.0785 19.663 21.3421 19 21.3421H5C4.33696 21.3421 3.70126 21.0785 3.23242 20.6097C2.76358 20.1408 2.5 19.5051 2.5 18.8421V9.8421C2.5 9.17906 2.76358 8.54336 3.23242 8.07452C3.70126 7.60568 4.33696 7.3421 5 7.3421H5.92969L6.11426 7.33038C6.29694 7.3078 6.47445 7.25168 6.6377 7.16437C6.80088 7.07707 6.94625 6.96097 7.06641 6.82159L7.17773 6.67413L7.99023 5.45538V5.45441L8.0791 5.32941C8.29626 5.04364 8.57309 4.80787 8.89062 4.638C9.25347 4.44393 9.65883 4.34204 10.0703 4.3421H13.9297L14.084 4.34698ZM10.0703 5.3421C9.82342 5.34207 9.58001 5.4034 9.3623 5.51984C9.14466 5.63627 8.95926 5.80474 8.82227 6.01007L8.82129 6.00909L8.00977 7.22882V7.2298C7.78144 7.57194 7.47208 7.85218 7.10938 8.0462C6.79193 8.21599 6.4421 8.31516 6.08398 8.33722L5.92969 8.3421H5C4.60218 8.3421 4.22076 8.50025 3.93945 8.78156C3.65815 9.06286 3.5 9.44428 3.5 9.8421V18.8421C3.5 19.2399 3.65815 19.6213 3.93945 19.9026C4.22076 20.184 4.60218 20.3421 5 20.3421H19C19.3978 20.3421 19.7792 20.184 20.0605 19.9026C20.3419 19.6213 20.5 19.2399 20.5 18.8421V9.8421C20.5 9.44428 20.3419 9.06286 20.0605 8.78156C19.7792 8.50025 19.3978 8.3421 19 8.3421H18.0703C17.6588 8.34216 17.2535 8.24027 16.8906 8.0462C16.5279 7.85218 16.2186 7.57194 15.9902 7.2298V7.22882L15.1777 6.00909V6.01007C15.0407 5.80474 14.8553 5.63627 14.6377 5.51984C14.4745 5.43252 14.2969 5.3764 14.1143 5.35382L13.9297 5.3421H10.0703ZM12 10.3421C12.9283 10.3421 13.8182 10.7111 14.4746 11.3675C15.131 12.0239 15.5 12.9138 15.5 13.8421C15.5 14.7704 15.131 15.6603 14.4746 16.3167C13.8182 16.9731 12.9283 17.3421 12 17.3421C11.0717 17.3421 10.1818 16.9731 9.52539 16.3167C8.86901 15.6603 8.5 14.7704 8.5 13.8421C8.5 12.9138 8.86901 12.0239 9.52539 11.3675C10.1818 10.7111 11.0717 10.3421 12 10.3421ZM12 11.3421C11.337 11.3421 10.7013 11.6057 10.2324 12.0745C9.76358 12.5434 9.5 13.1791 9.5 13.8421C9.5 14.5051 9.76358 15.1408 10.2324 15.6097C10.7013 16.0785 11.337 16.3421 12 16.3421C12.663 16.3421 13.2987 16.0785 13.7676 15.6097C14.2364 15.1408 14.5 14.5051 14.5 13.8421L14.4873 13.595C14.4305 13.0227 14.1778 12.4848 13.7676 12.0745C13.2987 11.6057 12.663 11.3421 12 11.3421Z"/>
          </svg>
        </div>
        <div class="btn-wrapper">
          <p>Scan dit køleskab</p>
        </div>
      </button>
    </div>
    <div>
      <ToggleChip v-model="isOn">Click Me</ToggleChip>
    </div>
  </div>
</template>

<style scoped>

  button {
    margin: 0px;
  }

  .empty-content {
    display: flex;
    padding-bottom: 48px;
    padding-top: 24px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    align-self: stretch;
  }

  .centered-text {
    text-align: center;
  }

</style>