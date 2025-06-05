<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../firebase.js';
import RecipeImages from "../RecipeImages.json";
import { computed } from 'vue';
import AnIndgredientItem from '../components/AnIndgredientItem.vue'
import IngridientImages from "../IngridientImages.json";

// Firebase realtime database initéres allerede et andet sted i dit projekt

const ingredientCount = computed(() => recipe.value.ingredienser?.length || 0);

const route = useRoute();
const recipeId = route.params.id;

const error = ref(null);
const imageUrl = ref('');
const recipe = ref({
  ingredienser: []
});

console.log("component mounted");

onMounted(async () => {
  console.log("onMounted kører");
  try {
    const recipeRef = dbRef(database, `${recipeId}`);
    const snapshot = await get(recipeRef);

    if (snapshot.exists()) {
      recipe.value = snapshot.val();
      const localImage = RecipeImages[recipeId];
      imageUrl.value = localImage ? localImage.image : null;
      
      console.log("route.params.id:", recipeId);
      console.log("RecipeImages keys:", Object.keys(RecipeImages));
      console.log("localImage:", RecipeImages[recipeId]);

    } else {
      error.value = 'Opskrift ikke fundet';
    }
  } catch (e) {
    error.value = 'Fejl ved hentning af opskrift: ' + e.message;
  }
});

</script>

<template>
  <div class="page-wrapper">
    <!-- Header -->
    <div class="header">
      <button @click="goBack" class="icon-btn" aria-label="Tilbage">
        <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-black" d="M15 19L8 12L15 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </button>
      <button @click="like" class="icon-btn" aria-label="Tilbage">
        <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-black" d="M18.7663 7.0798C18.3753 6.68742 17.9111 6.37615 17.4002 6.16378C16.8893 5.95141 16.3417 5.8421 15.7887 5.8421C15.2357 5.8421 14.6881 5.95141 14.1772 6.16378C13.6663 6.37615 13.2021 6.68742 12.8112 7.0798L11.9998 7.89376L11.1884 7.0798C10.3987 6.28758 9.32768 5.84251 8.21089 5.84251C7.09409 5.84251 6.02303 6.28758 5.23334 7.0798C4.44365 7.87203 4 8.94651 4 10.0669C4 11.1873 4.44365 12.2617 5.23334 13.054L11.9998 19.8421L18.7663 13.054C19.1574 12.6618 19.4677 12.1961 19.6794 11.6836C19.891 11.171 20 10.6217 20 10.0669C20 9.5121 19.891 8.96274 19.6794 8.45021C19.4677 7.93768 19.1574 7.47201 18.7663 7.0798Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </button>
    </div>

    <!-- image -->
    <div class="image-wrapper">
        <img v-if="imageUrl" :src="imageUrl" :alt="recipe.navn || 'Billede'" class="recipe-image"/>
    </div>

    <!-- Main Content -->
    <div class="content">
      <div class="info-wrapper">
        <div class="title-wrapper">
          <h1 class="title">{{ recipe.navn }}</h1>

          <div class="stickers-wrapper">
            <div class="ai-tag">
              <div class="icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24">
                    <path class="i-str-black" d="M10.3896 13.1963C10.4517 13.3639 10.5752 13.501 10.7334 13.5801L10.8037 13.6104L14.5586 15L10.8037 16.3896C10.6361 16.4517 10.499 16.5752 10.4199 16.7334L10.3896 16.8037L9 20.5586L7.61035 16.8037L7.58008 16.7334C7.51234 16.5978 7.40222 16.4877 7.2666 16.4199L7.19629 16.3896L3.44043 15L7.19629 13.6104C7.36394 13.5483 7.50104 13.4248 7.58008 13.2666L7.61035 13.1963L9 9.44043L10.3896 13.1963Z" stroke-linejoin="round"/>
                    <path class="i-str-black" d="M17.8496 5.73633C17.9117 5.90399 18.0351 6.04109 18.1934 6.12012L18.2637 6.15039L20.5586 7L18.2637 7.84961C18.096 7.91165 17.9589 8.0351 17.8799 8.19336L17.8496 8.26367L17 10.5586L16.1504 8.26367L16.1201 8.19336C16.0411 8.0351 15.904 7.91165 15.7363 7.84961L13.4404 7L15.7363 6.15039C15.904 6.08835 16.0411 5.9649 16.1201 5.80664L16.1504 5.73633L17 3.44043L17.8496 5.73633Z" stroke-linejoin="round"/>
                </svg>
              </div>
              <p class="base-strong">AI</p>
              </div>
            <div class="offer-tag base-strong">Spar op til 17kr på denne ret</div>
          </div>
        </div>

        <div class="details-wrapper">
          <div class="detail-item">
            <div class="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24">
                  <path class="i-fill-black" d="M11.5 3C14.0196 3 16.4359 4.00089 18.2175 5.78249C19.9991 7.56408 21 9.98044 21 12.5C21 15.0196 19.9991 17.4359 18.2175 19.2175C16.4359 20.9991 14.0196 22 11.5 22C8.98044 22 6.56408 20.9991 4.78249 19.2175C3.00089 17.4359 2 15.0196 2 12.5C2 9.98044 3.00089 7.56408 4.78249 5.78249C6.56408 4.00089 8.98044 3 11.5 3ZM11.5 4C9.24566 4 7.08365 4.89553 5.48959 6.48959C3.89553 8.08365 3 10.2457 3 12.5C3 14.7543 3.89553 16.9163 5.48959 18.5104C7.08365 20.1045 9.24566 21 11.5 21C12.6162 21 13.7215 20.7801 14.7528 20.353C15.7841 19.9258 16.7211 19.2997 17.5104 18.5104C18.2997 17.7211 18.9258 16.7841 19.353 15.7528C19.7801 14.7215 20 13.6162 20 12.5C20 10.2457 19.1045 8.08365 17.5104 6.48959C15.9163 4.89553 13.7543 4 11.5 4ZM11 7H12V12.42L16.7 15.13L16.2 16L11 13V7Z"/>
              </svg>
            </div>
            <span>{{ recipe.tidsestimat }}</span>
          </div>
          <div class="detail-item">
            <button class="accent">
              <div class="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle class="i-str-black" cx="12" cy="7" r="4.5"/>
                  <path class="i-str-black" d="M14 14.5C17.0376 14.5 19.5 16.9624 19.5 20C19.5 20.2761 19.2761 20.5 19 20.5H5C4.72386 20.5 4.5 20.2761 4.5 20C4.5 16.9624 6.96243 14.5 10 14.5H14Z" stroke-linejoin="round"/>
                </svg>
              </div>
              <p class="people">3-4 Pers.</p>
              <div class="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path class="i-str-black" d="M19 9L12 16L5 9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <p class="description">{{ recipe.description }}</p>
      </div>
    
<!-------------------------------------------------------- ooo --------------------------------------------------------->

      <!-- Ingredienser -->
      <div class="ingridients-wrapper">
        <div class="section-header">
          <h3>Ingredienser</h3>
          <span>{{ ingredientCount }} ingredienser</span>


        </div>

        <div class="ingredients">
          <AnIndgredientItem
            v-for="(item, index) in recipe.ingredienser"
            :key="index"
            :ingredient="item"
          />
        </div>

        <button class="primary add-to-list">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-white" d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="btn-wrapper">
            <p>Tilføj til indkøbsliste</p>
          </div>
        </button>
      </div>

      <!-- Fremgangsmåde -->
      <div class="section">
        <h2>Fremgangsmåde</h2>
        <p class="method">{{ recipe.method }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page-wrapper {
  padding: 0;
  gap: 16px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--color-surface-white);
  padding: 44px 16px 16px 16px;
  border: 1px solid var(--color-surface-white);
  border-radius: 0;
}

.image-wrapper {
  position: relative;
  padding: 0 16px;
  border-radius: 0;
  background-color: var(--color-surface-white);
  border: none;
}

.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.title {
  color: var(--color-text-black);
}

.content {
  background: var(--color-surface-white);
  padding: 16px;
  border: none;
  border-radius: 0;
  padding-bottom: 165px;
}

.stickers-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.offer-tag {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 20px;
  align-items: center;
  gap: 2px;
  background: var(--color-surface-awareness-default);
  font-family: 'Fotext-Bold';
  color: var(--color-text-black);
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 6px;
}

.ai-tag {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 20px;
  align-items: center;
  gap: 2px;
  background: var(--color-surface-info-default);
  font-family: 'Fotext-Bold';
  color: var(--color-text-black);
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 6px;
}

.base-strong {
  color: var(--color-text-black);
}

.ai-tag .icon-wrapper {
  margin-left: -4px;
}

h3 {
  color: var(--color-text-black);
}

.details-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.people {
  color: var(--color-text-black);
}

.description {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  line-height: 1.4;
}

.section {
  margin-top: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}

.ingredients {
  margin-top: 16px;
  list-style: none;
  padding: 0;
}

.ingredient-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.ingredient-left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.ingredient-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
}

.ingredient-name {
  font-weight: 600;
}

.offer-badge {
  background: #fde047;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 4px;
  margin-left: 4px;
}

.ingredient-amount {
  font-size: 13px;
  color: #666;
}

.trash-button {
  background: none;
  border: none;
  color: #bbb;
  font-size: 16px;
  cursor: pointer;
}

.add-to-list {
  position: fixed;
  bottom: 110px;
  margin: 0 16px;
  left: 0;
  right: 0;
  width: 343px;
  padding: 8px 0;
  font-size: 11px;
  text-align: center;
  z-index: 12;
}

.method {
  font-size: 14px;
  color: #444;
  white-space: pre-line;
  line-height: 1.6;
  margin-top: 8px;
}

.bottom-nav {
  position: fixed;
  height: 92px;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-surface-white);
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  font-size: 11px;
  text-align: center;
  z-index: 10;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}

.nav-item.active {
  color: #2563eb;
}
</style>
