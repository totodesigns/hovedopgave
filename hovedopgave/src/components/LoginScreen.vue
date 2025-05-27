<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="login-wrapper">
        <div class="logo-section">
          <img src="../assets/images/logo_foetexplus.png" alt="føtex plus logo" class="login-logo" />
        </div>

        <div class="form-section">
          <h1>Log ind eller tilmeld dig gratis</h1>
          <p class="subtext">
            Du får føtex Plus priser, personlige kuponer og mange andre fordele
          </p>

          <label class="email-label">E-mail</label>
          <ion-input
            placeholder="Indtast e-mail adresse"
            type="email"
            class="email-input"
          ></ion-input>

          <p class="info-text">
            Husk at bruge den e-mail du har oprettet din
            <a href="#">Salling Group profil</a> med.
          </p>

          <div class="brands">
            <img src="../assets/images/logo-salling.png" alt="Salling" />
            <img src="../assets/images/logo-br.png" alt="BR" />
            <img src="../assets/images/logo-netto.png" alt="Netto" />
            <img src="../assets/images/logo-fotex.png" alt="Føtex" />
            <img src="../assets/images/logo-bilka.png" alt="Bilka" />
          </div>

          <ion-button expand="block" color="primary">Log ind</ion-button>
          <ion-button expand="block" fill="outline" color="primary">
            Opret en gratis profil
          </ion-button>

          <p class="guest-login">
            <a href="#">Fortsæt som gæstebruger uden fordele</a>
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue'
</script>

<style>
ion-content {
  background-color: var(--ion-color-surface-white);
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: var(--ion-color-surface-white);
}

.logo-section {
  background-color: var(--color-surface-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 40px;
}

.logind-logo.LoginScreen {
  max-width: 50px;
  height: auto;
}

.form-section {
  padding: 24px;
  text-align: center;
  flex: 1;
}

h1 {
  font-size: 1.25rem;
  font-weight: bold;
}

.subtext {
  font-size: 1rem;
  color: #333;
  margin: 12px 0 24px;
}

.email-label {
  text-align: left;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.email-input {
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
}

.info-text {
  font-size: 0.875rem;
  color: #333;
  margin: 12px 0;
}

.info-text a {
  color: #0050ff;
  font-weight: 500;
  text-decoration: underline;
}

.brands {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 16px 0 24px;
}

.brands img {
  height: 24px;
  object-fit: contain;
}

ion-button {
  margin-top: 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
}

.guest-login {
  margin-top: 24px;
  font-size: 0.9rem;
}

.guest-login a {
  color: #000;
  text-decoration: underline;
}
</style>
