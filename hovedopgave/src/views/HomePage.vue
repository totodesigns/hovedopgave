<script setup>

</script>

<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Blank</h1>
    </header>

    <main class="content">
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Vue <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">UI Components</a>
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}

.header {
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0;
  font-size: 24px;
}

.content {
  flex: 1;
  padding: 16px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
  color: #007bff;
}
</style>
