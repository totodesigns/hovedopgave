<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToGuide = () => {
  router.push('/guide');
}

const goToPLP = () => {
  router.push('/plp');
}
</script>

<template>
  <div class="page-wrapper">
    <header>
      <section class="logo-section">
        <img
          src="../assets/images/logo_foetexplus.png"
          alt="føtex plus logo"
          class="login-logo"
        />
      </section>
    </header>
    <main class="form-section">
      <h3>Log ind eller tilmeld dig gratis</h3>
      <p class="subtext">
        Du får føtex Plus priser, personlige kuponer og mange andre fordele
      </p>

      <form>
        <label for="email" class="email-label base-strong">E-mail</label>
        <input
          id="email"
          name="email"
          placeholder="Indtast e-mail adresse"
          type="email"
          class="email-input"
        />

        <p class="info-text sm-regular">
          Husk at bruge den e-mail du har oprettet din <u>Salling Group profil</u> med.
        </p>

        <section class="brands" aria-label="Brandlogoer">
          <img src="../assets/images/logo-salling.png" alt="Salling" class="salling"/>
          <img src="../assets/images/logo-br.png" alt="BR" class="br"/>
          <img src="../assets/images/logo-netto.png" alt="Netto" class="netto"/>
          <img src="../assets/images/logo-føtex.png" alt="Føtex" class="fotex"/>
          <img src="../assets/images/logo-bilka.png" alt="Bilka" class="bilka"/>
        </section>

        <button class="primary" @click="goToGuide">
          <div class="btn-wrapper">
            <p>Log ind</p>
          </div>
        </button>

        <button class="secondary" @click="goToGuide">
          <div class="btn-wrapper">
            <p>Opret gratis profil</p>
          </div>
        </button>
      </form>
      <a href="#" class="guest-login" @click="goToPLP">Fortsæt som gæstebruger uden fordele</a>
    </main>
  </div>
</template>

<style>

header {
  background-color: var(--color-surface-white);
}

.logo-section {
  background-color: var(--color-surface-background);
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 40px;
}

.login-logo {
  max-width: 118px;
  height: auto;
}

.form-section {
  background-color: var(--color-surface-white);
  padding: 24px 16px 48px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 70vh;
}

h3.heading-xl {
  color: var(--color-text-black);
}

.subtext {
  font-size: 1rem;
  color: #333;
  margin: 8px 0 16px;
}

.email-label {
  text-align: left;
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-black);
}

.email-input {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 8px;
  border: 1px solid var(--color-border-grey-default);
  border-radius: 2px;
  padding: 10px 8px;
  height: 48px;
}

.email-input::placeholder { 
  color: var(--color-text-grey-placeholder); 
}

.info-text {
  color: var(--color-text-black);
  text-align: left;
}

.info-text a {
  color: var(--color-text-black);
}

.brands {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.brands img {
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
}

.salling {
  height: 24px;
}

.br {
  height: 22px;
}

.netto {
  height: 16px;
}

.fotex {
  height: 17px;
}

.bilka {
  height: 14px;
}

button {
  margin-top: 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
}

.guest-login {
  margin-top: 24px;
  color: var(--color-text-black);
}

</style>
