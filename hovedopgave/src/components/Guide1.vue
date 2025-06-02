<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  // Gå tilbage
  console.log("Tilbage");
};

const skip = () => {
  // Gå til slutningen eller næste side
  console.log("Spring over");
};

const continueFlow = () => {
  // Næste side
  console.log("Fortsæt");
};
</script>

<template>
  <main class="page-wrapper">
    <header class="top-bar">
      <button @click="goBack" class="icon-btn" aria-label="Tilbage">
        <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path class="i-str-black" d="M15 19L8 12L15 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </button>

      <div class="logo-container">
        <img src="../assets/images/logo_foetexplus.png" alt="føtex plus logo" class="top-barlogo" />
        <p class="logo-text sm-strong">Opskrifter</p>
      </div>

      <a class="skip" @click="skip">Skip</a>
    </header>

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
      <button class="primary" @click="continueFlow">
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
main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: none;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-barlogo {
  width: 76px;
  height: auto;
}

.logo-text {
  margin-top: 6px;
}

.icon-btn {
  margin: 0;
  padding: 0;
}

.illustration {
  width: 100%;
  height: auto;
}

.text-content {
  height: 100%;
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
