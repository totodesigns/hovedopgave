<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ToggleChip from '../components/ToggleChip.vue'

const router = useRouter()

const skip = () => {
  router.push('/plp');
};

const allergens = [
  'Gluten',
  'Skaldyr',
  'Æg',
  'Fisk',
  'Peanuts',
  'Soja',
  'Laktose',
  'Nødder',
  'Selleri',
  'Sennep',
  'Sesamfrø',
  'Svovldioxid og sulfitter',
  'Lupin',
  'Bløddyr'
]

const selectedAllergens = ref([])

</script>

<template>
  <main class="page-wrapper">

    <section class="text-content-1">
        <h2 class="title">Nogle allegerner?</h2>

        <p class="description">
          Vælg dine allergener nedenfor, som vi bør være opmærksomme på. Du kan til enhver tid ændre det i indstillingerne eller filtrene, hvis du laver mad til andre end dig selv.
        </p>
    </section>

    <section class="allergener-chips">
        <ToggleChip
            v-for="allergen in allergens"
            :key="allergen"
            v-model="selectedAllergens"
            :value="allergen"
        >
            {{ allergen }}
        </ToggleChip>
    </section>


    <section class="text-content-2">
        <h2 class="title">Ikke på listen?</h2>

        <p class="description">
          Hvis du oplever, at din allergi ikke står på listen, kan du tilføje den manuelt i indstillingerne.
        </p>
    </section>

    <nav class="pagination" aria-label="Pagination indikator">
      <span class="dot"></span>
      <span class="dot active" aria-current="step"></span>
      <span class="dot"></span>
    </nav>

    <footer>
      <div class="footer-btn-container">
        <button class="secondary" @click="$emit('prev')">
          <div class="btn-wrapper">
            <p>Tilbage</p>
          </div>
        </button>

        <button class="primary" @click="$emit('next')">
          <div class="btn-wrapper">
            <p>Fortsæt</p>
          </div>
        </button>
      </div>

      <button class="tertiary" @click="skip">
        <div class="btn-wrapper">
          <p>Spring over</p>
        </div>
      </button>
    </footer>
  </main>
</template>

<style scoped>
.page-wrapper {
  padding: 0;
  background: none;
}

main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
}

.text-content-1 {
  text-align: left;
}

.text-content-2 {
  height: 144px;
  text-align: left;
}

.title {
  margin-bottom: 8px;
}

.allergener-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: flex-start;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background: var(--color-surface-grey-dark);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.dot.active {
  width: 16px;
  background: white;
}

.footer-btn-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.skip-bottom {
  background: none;
  border: none;
  color: #ffffffa0;
  font-size: 14px;
}
</style>
