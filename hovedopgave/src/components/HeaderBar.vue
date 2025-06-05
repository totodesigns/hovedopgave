<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToFridge = () => {
  router.push('/scanner');
};

const props = defineProps({
  search: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['update:search']);

</script>

<template>
        <header class="search-bar">
            <div class="header-bar">
                <div class="title-wrapper">
                    <div class="logo-wrapper">
                        <img id="logo" src="../assets/images/logo_foetexplus.png">
                    </div>
                    <h1>Opskriftunivers</h1>
                </div>
                <div class="profile-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="i-str-white" cx="12" cy="7" r="4.5"/>
                        <path class="i-str-white" d="M14 14.5C17.0376 14.5 19.5 16.9624 19.5 20C19.5 20.2761 19.2761 20.5 19 20.5H5C4.72386 20.5 4.5 20.2761 4.5 20C4.5 16.9624 6.96243 14.5 10 14.5H14Z" stroke-linejoin="round"/>
                    </svg>
                    <p>Profil</p>
                </div>
            </div>
            <div class="search-wrapper">
                <div class="search-field">
                    <div class="search-text">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path class="i-str-black" d="M10.3896 13.1963C10.4517 13.3639 10.5752 13.501 10.7334 13.5801L10.8037 13.6104L14.5586 15L10.8037 16.3896C10.6361 16.4517 10.499 16.5752 10.4199 16.7334L10.3896 16.8037L9 20.5586L7.61035 16.8037L7.58008 16.7334C7.51234 16.5978 7.40222 16.4877 7.2666 16.4199L7.19629 16.3896L3.44043 15L7.19629 13.6104C7.36394 13.5483 7.50104 13.4248 7.58008 13.2666L7.61035 13.1963L9 9.44043L10.3896 13.1963Z" stroke-linejoin="round"/>
                            <path class="i-str-black" d="M17.8496 5.73633C17.9117 5.90399 18.0351 6.04109 18.1934 6.12012L18.2637 6.15039L20.5586 7L18.2637 7.84961C18.096 7.91165 17.9589 8.0351 17.8799 8.19336L17.8496 8.26367L17 10.5586L16.1504 8.26367L16.1201 8.19336C16.0411 8.0351 15.904 7.91165 15.7363 7.84961L13.4404 7L15.7363 6.15039C15.904 6.08835 16.0411 5.9649 16.1201 5.80664L16.1504 5.73633L17 3.44043L17.8496 5.73633Z" stroke-linejoin="round"/>
                        </svg>
                        <input
                            type="text"
                            :value="search"
                            @input="emit('update:search', $event.target.value)"
                            placeholder="Søg på en ingrediens"
                            class="ingredient-input"
                        />
                    </div>
                    <div class="input-action">
                        <div class="vert-divider">
                        </div>                        
                        <div @click="goToFridge">
                            <svg width="24" height="25" viewBox="0 0 24 25">
                                <path class="i-fill-black" d="M14.084 4.34698C14.4421 4.36904 14.7919 4.46821 15.1094 4.638C15.4269 4.80787 15.7037 5.04364 15.9209 5.32941L16.0098 5.45441V5.45538L16.8213 6.67413H16.8223C16.9593 6.87947 17.1447 7.04793 17.3623 7.16437C17.58 7.28081 17.8234 7.34214 18.0703 7.3421H19C19.663 7.3421 20.2987 7.60568 20.7676 8.07452C21.2364 8.54336 21.5 9.17906 21.5 9.8421V18.8421C21.5 19.5051 21.2364 20.1408 20.7676 20.6097C20.2987 21.0785 19.663 21.3421 19 21.3421H5C4.33696 21.3421 3.70126 21.0785 3.23242 20.6097C2.76358 20.1408 2.5 19.5051 2.5 18.8421V9.8421C2.5 9.17906 2.76358 8.54336 3.23242 8.07452C3.70126 7.60568 4.33696 7.3421 5 7.3421H5.92969L6.11426 7.33038C6.29694 7.3078 6.47445 7.25168 6.6377 7.16437C6.80088 7.07707 6.94625 6.96097 7.06641 6.82159L7.17773 6.67413L7.99023 5.45538V5.45441L8.0791 5.32941C8.29626 5.04364 8.57309 4.80787 8.89062 4.638C9.25347 4.44393 9.65883 4.34204 10.0703 4.3421H13.9297L14.084 4.34698ZM10.0703 5.3421C9.82342 5.34207 9.58001 5.4034 9.3623 5.51984C9.14466 5.63627 8.95926 5.80474 8.82227 6.01007L8.82129 6.00909L8.00977 7.22882V7.2298C7.78144 7.57194 7.47208 7.85218 7.10938 8.0462C6.79193 8.21599 6.4421 8.31516 6.08398 8.33722L5.92969 8.3421H5C4.60218 8.3421 4.22076 8.50025 3.93945 8.78156C3.65815 9.06286 3.5 9.44428 3.5 9.8421V18.8421C3.5 19.2399 3.65815 19.6213 3.93945 19.9026C4.22076 20.184 4.60218 20.3421 5 20.3421H19C19.3978 20.3421 19.7792 20.184 20.0605 19.9026C20.3419 19.6213 20.5 19.2399 20.5 18.8421V9.8421C20.5 9.44428 20.3419 9.06286 20.0605 8.78156C19.7792 8.50025 19.3978 8.3421 19 8.3421H18.0703C17.6588 8.34216 17.2535 8.24027 16.8906 8.0462C16.5279 7.85218 16.2186 7.57194 15.9902 7.2298V7.22882L15.1777 6.00909V6.01007C15.0407 5.80474 14.8553 5.63627 14.6377 5.51984C14.4745 5.43252 14.2969 5.3764 14.1143 5.35382L13.9297 5.3421H10.0703ZM12 10.3421C12.9283 10.3421 13.8182 10.7111 14.4746 11.3675C15.131 12.0239 15.5 12.9138 15.5 13.8421C15.5 14.7704 15.131 15.6603 14.4746 16.3167C13.8182 16.9731 12.9283 17.3421 12 17.3421C11.0717 17.3421 10.1818 16.9731 9.52539 16.3167C8.86901 15.6603 8.5 14.7704 8.5 13.8421C8.5 12.9138 8.86901 12.0239 9.52539 11.3675C10.1818 10.7111 11.0717 10.3421 12 10.3421ZM12 11.3421C11.337 11.3421 10.7013 11.6057 10.2324 12.0745C9.76358 12.5434 9.5 13.1791 9.5 13.8421C9.5 14.5051 9.76358 15.1408 10.2324 15.6097C10.7013 16.0785 11.337 16.3421 12 16.3421C12.663 16.3421 13.2987 16.0785 13.7676 15.6097C14.2364 15.1408 14.5 14.5051 14.5 13.8421L14.4873 13.595C14.4305 13.0227 14.1778 12.4848 13.7676 12.0745C13.2987 11.6057 12.663 11.3421 12 11.3421Z"/>
                            </svg>                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<style scoped>

.header-bar {
    display: flex;
    padding-top: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.title-wrapper {
    display: flex;
    gap: 8px;
}

.logo-wrapper {
    width: 52px;
    height: 38px;
}

#logo {
    width: 100%;
}

.profile-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
}

.search-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    background-color: var(--color-surface-background);
    padding: 12px 16px 8px 16px;
}

.search-wrapper {
    display: flex;
    padding: 8px 0px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    width: 100%;
}

.search-field {
    display: flex;
    height: 48px;
    padding: 12px 16px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    border-radius: 2px;
    background: var(--color-surface-white);
}

.search-text {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.input-action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
}

.ingredient-input {
    height: 100%;
    width: 100%;
}

.vert-divider {
    width: 0.5px;
    height: 24px;
    background: var(--color-surface-grey-light-hover);
}

#placeholder {
    color: var(--color-text-grey-placeholder);
}

</style>