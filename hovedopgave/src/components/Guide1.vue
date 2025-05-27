<template>
  <div class="step">
    <img src="../assets/red-maden.png" alt="Red maden" />
    <h2>Red maden</h2>
    <p>
      Smid ikke maden ud! Selv maden bagerst i køleskabet kan bruges til en
      spændende aftensmad.
    </p>
    <button class="next-btn">Fortsæt</button>
  </div>
</template>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
}
img {
  width: 80%;
  max-width: 300px;
  margin-bottom: 24px;
}
h2 {
  font-size: 24px;
  margin-bottom: 12px;
}
p {
  font-size: 16px;
  margin-bottom: 24px;
}
.next-btn {
  background-color: #2a6aff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  border: none;
}
</style>
