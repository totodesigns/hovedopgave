<template>
  <div class="camera-wrapper">
    <video ref="video" autoplay playsinline></video>
    <button @click="startCamera">Start Kamera</button>
    <button @click="stopCamera">Stop Kamera</button>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';

const video = ref(null);
let stream = null;

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = stream;
  } catch (error) {
    console.error('Fejl ved adgang til kamera:', error);
    alert('Kunne ikke få adgang til kameraet.');
  }
};

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
};

onBeforeUnmount(() => {
  stopCamera();
});
</script>

<style scoped>
.camera-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

video {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
</style>
