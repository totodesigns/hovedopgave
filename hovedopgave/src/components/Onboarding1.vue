<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const skip = () => {
  // Gå til slutningen eller næste side
  console.log("Spring over");
};

</script>

<template>
  <main class="page-wrapper">

    <section class="text-content">
        <h1 class="title">Fortæl os om dine diætbehov</h1>

        <p class="description">
          Hjælp os med at give dig personaliseret forslag på baggrund af dine diætbehov. Det tager kun ét minut, og så husker vi dine svar fremover!
        </p>
    </section>

    <nav class="pagination" aria-label="Pagination indikator">
      <span class="dot active" aria-current="step"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </nav>

    <footer>
      <button class="primary" @click="$emit('next')">
        <div class="btn-wrapper">
          <p>Fortsæt</p>
        </div>
      </button>

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

.illustration {
  width: 100%;
  height: auto;
}

.text-content {
  height: 125px;
  text-align: center;
}

.title {
  margin-bottom: 6px;
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

.skip-bottom {
  background: none;
  border: none;
  color: #ffffffa0;
  font-size: 14px;
}
</style>
