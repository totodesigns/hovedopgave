<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  // Gå tilbage
  console.log("Tilbage");
};

const skip = () => {
  router.push('/onboarding');
};

const continueFlow = () => {
  // Næste side
  console.log("Fortsæt");
};
</script>

<template>
  <main class="page-wrapper">
    <figure>
      <img src="../assets/images/illustration-bliv-inspireret.png" alt="Illustration af mad i skraldespand" class="illustration" />
    </figure>

    <section class="text-content">
        <h1 class="title">Bliv inspireret</h1>

        <p class="description">
          Med vores kunstige intelligens kan du nemt og hurtigt finde en masse nye opskrifter til at gøre hverdagen mere spændende.
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

.footer-btn-container {
  display: flex;
  flex-direction: row;
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
