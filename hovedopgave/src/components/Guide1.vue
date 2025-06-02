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
    <figure>
      <img src="../assets/images/illustration-red-maden.png" alt="Illustration af mad i skraldespand" class="illustration" />
    </figure>

    <section class="text-content">
        <h1 class="title">Red maden</h1>

        <p class="description">
          Smid ikke maden ud! Selv maden bagerst i køleskabet kan bruges til en spændende aftensmad.
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
