<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();


defineProps(['ingredient'])

</script>

<template>
    <div class="ingredient-item">

        <div class="ingredient-image-wrapper">

        </div>

        <div>
            <div class="ingredient-name">
                {{ ingredient.name }}
                <span v-if="ingredient.offer" class="offer-badge">Tilbudsvare</span>
            </div>
            <div class="ingredient-amount">{{ ingredient.amount }}</div>
        </div>
        <div class="trash-button">
            <button class="icon-btn">
                <div class="icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path class="i-str-black" d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>
.ingredient-item {
    display: flex;
    height: 48px;
    width: 100%;
    background-color: var(--color-surface-white);
}
</style>