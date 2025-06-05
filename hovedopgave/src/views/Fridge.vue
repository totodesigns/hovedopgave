<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BottomSheet from '../components/BottomSheet.vue'

const showFridge = ref(false)
const showStregkode = ref(false)
const showInfo = ref(false)

const video = ref(null)
let stream = null

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = stream
  } catch (err) {
    console.error('Error accessing camera:', err)
  }
}

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    video.value.srcObject = null
  }
}

onMounted(() => {
  startCamera()
})

onUnmounted(() => {
  stopCamera()
})
</script>

<template>
    <div class="page-wrapper">
        <div class="header-bar">
            <div class="icon-row">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path class="i-str-white" d="M15 19L8 12L15 5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" @click="showInfo = true">
                    <path class="i-str-white" d="M12 17V12V10M12 7H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h1>Køleskabsfunktion</h1>
        </div>
        <div class="main-content">
            <p>Scan stregkoden på en vare, upload et billede af dit køleskab eller fortæl os direkte, hvad du har.</p>
            <div class="video-content">
                <div class="video-wrapper" @click="showStregkode = true">
                    <video ref="video" autoplay playsinline></video>
                    <div class="info-box">
                        <p class="sm-strong">Tryk for at indtaste stregkode eller vare</p>
                    </div>
                </div>    
                <p class="centered-text">Hold stregkoden inde i boksen, så klarer scanneren resten.</p>        
            </div>
            <div class="picture-content">
                <p class="lg-strong">Upload et billede af dit køleskab</p>
                <div class="upload-wrapper" @click="showKøleskab = true">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path class="i-str-black" d="M21.25 13V8.5C21.25 7.17392 20.7232 5.90215 19.7855 4.96447C18.8479 4.02678 17.5761 3.5 16.25 3.5H7.75C6.42392 3.5 5.15215 4.02678 4.21447 4.96447C3.27678 5.90215 2.75 7.17392 2.75 8.5V15.5C2.75 16.1566 2.87933 16.8068 3.1306 17.4134C3.38188 18.02 3.75017 18.5712 4.21447 19.0355C5.15215 19.9732 6.42392 20.5 7.75 20.5H14.01" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="i-str-black" d="M3.01001 17L5.75001 13.8C6.10985 13.4426 6.58212 13.2205 7.08689 13.1713C7.59166 13.1221 8.09793 13.2488 8.52001 13.53C8.94209 13.8112 9.44836 13.9379 9.95313 13.8887C10.4579 13.8395 10.9302 13.6174 11.29 13.26L13.62 10.93C14.2895 10.2582 15.1759 9.84621 16.121 9.76745C17.0662 9.68869 18.0086 9.94832 18.78 10.5L21.25 12.41M8.01001 10.17C8.228 10.1687 8.4436 10.1245 8.6445 10.0398C8.8454 9.95518 9.02766 9.83181 9.18088 9.67673C9.33409 9.52166 9.45527 9.33792 9.53748 9.13602C9.61969 8.93412 9.66132 8.718 9.66001 8.50001C9.6587 8.28201 9.61446 8.06641 9.52982 7.86551C9.44519 7.66461 9.32181 7.48235 9.16674 7.32914C9.01166 7.17592 8.82793 7.05475 8.62603 6.97254C8.42412 6.89033 8.208 6.84869 7.99001 6.85001C7.54975 6.85266 7.12858 7.03009 6.81914 7.34328C6.50971 7.65647 6.33736 8.07975 6.34001 8.52001C6.34266 8.96027 6.5201 9.38144 6.83328 9.69087C7.14647 10.0003 7.56975 10.1727 8.01001 10.17Z" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="i-str-black" d="M18.707 15V20" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path class="i-str-black" d="M20.9999 17.105L19.0329 15.138C18.9902 15.0951 18.9394 15.061 18.8835 15.0377C18.8275 15.0145 18.7675 15.0025 18.7069 15.0025C18.6464 15.0025 18.5864 15.0145 18.5304 15.0377C18.4745 15.061 18.4237 15.0951 18.3809 15.138L16.4139 17.105" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="sm-regular grey-text">Vælg billede fra kamerarulle (max 5 MB)</p>
                </div>  
                <div class="divider">
                    <div class="line"></div>
                    <p class="sm-regular grey-text">eller</p>
                    <div class="line"></div>
                </div>
                <button class="primary">
                    <div class="btn-wrapper">
                        <p>Tag et billede</p>
                    </div>
                    <div class="icon-wrapper">
                        <svg width="24" height="25" viewBox="0 0 24 25">
                            <path class="i-fill-white" d="M14.084 4.34698C14.4421 4.36904 14.7919 4.46821 15.1094 4.638C15.4269 4.80787 15.7037 5.04364 15.9209 5.32941L16.0098 5.45441V5.45538L16.8213 6.67413H16.8223C16.9593 6.87947 17.1447 7.04793 17.3623 7.16437C17.58 7.28081 17.8234 7.34214 18.0703 7.3421H19C19.663 7.3421 20.2987 7.60568 20.7676 8.07452C21.2364 8.54336 21.5 9.17906 21.5 9.8421V18.8421C21.5 19.5051 21.2364 20.1408 20.7676 20.6097C20.2987 21.0785 19.663 21.3421 19 21.3421H5C4.33696 21.3421 3.70126 21.0785 3.23242 20.6097C2.76358 20.1408 2.5 19.5051 2.5 18.8421V9.8421C2.5 9.17906 2.76358 8.54336 3.23242 8.07452C3.70126 7.60568 4.33696 7.3421 5 7.3421H5.92969L6.11426 7.33038C6.29694 7.3078 6.47445 7.25168 6.6377 7.16437C6.80088 7.07707 6.94625 6.96097 7.06641 6.82159L7.17773 6.67413L7.99023 5.45538V5.45441L8.0791 5.32941C8.29626 5.04364 8.57309 4.80787 8.89062 4.638C9.25347 4.44393 9.65883 4.34204 10.0703 4.3421H13.9297L14.084 4.34698ZM10.0703 5.3421C9.82342 5.34207 9.58001 5.4034 9.3623 5.51984C9.14466 5.63627 8.95926 5.80474 8.82227 6.01007L8.82129 6.00909L8.00977 7.22882V7.2298C7.78144 7.57194 7.47208 7.85218 7.10938 8.0462C6.79193 8.21599 6.4421 8.31516 6.08398 8.33722L5.92969 8.3421H5C4.60218 8.3421 4.22076 8.50025 3.93945 8.78156C3.65815 9.06286 3.5 9.44428 3.5 9.8421V18.8421C3.5 19.2399 3.65815 19.6213 3.93945 19.9026C4.22076 20.184 4.60218 20.3421 5 20.3421H19C19.3978 20.3421 19.7792 20.184 20.0605 19.9026C20.3419 19.6213 20.5 19.2399 20.5 18.8421V9.8421C20.5 9.44428 20.3419 9.06286 20.0605 8.78156C19.7792 8.50025 19.3978 8.3421 19 8.3421H18.0703C17.6588 8.34216 17.2535 8.24027 16.8906 8.0462C16.5279 7.85218 16.2186 7.57194 15.9902 7.2298V7.22882L15.1777 6.00909V6.01007C15.0407 5.80474 14.8553 5.63627 14.6377 5.51984C14.4745 5.43252 14.2969 5.3764 14.1143 5.35382L13.9297 5.3421H10.0703ZM12 10.3421C12.9283 10.3421 13.8182 10.7111 14.4746 11.3675C15.131 12.0239 15.5 12.9138 15.5 13.8421C15.5 14.7704 15.131 15.6603 14.4746 16.3167C13.8182 16.9731 12.9283 17.3421 12 17.3421C11.0717 17.3421 10.1818 16.9731 9.52539 16.3167C8.86901 15.6603 8.5 14.7704 8.5 13.8421C8.5 12.9138 8.86901 12.0239 9.52539 11.3675C10.1818 10.7111 11.0717 10.3421 12 10.3421ZM12 11.3421C11.337 11.3421 10.7013 11.6057 10.2324 12.0745C9.76358 12.5434 9.5 13.1791 9.5 13.8421C9.5 14.5051 9.76358 15.1408 10.2324 15.6097C10.7013 16.0785 11.337 16.3421 12 16.3421C12.663 16.3421 13.2987 16.0785 13.7676 15.6097C14.2364 15.1408 14.5 14.5051 14.5 13.8421L14.4873 13.595C14.4305 13.0227 14.1778 12.4848 13.7676 12.0745C13.2987 11.6057 12.663 11.3421 12 11.3421Z"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>

    <!-- Info Sheet -->
    <BottomSheet :isOpen="showInfo" :close="() => showInfo = false">
        <div class="sheet-wrapper">
            <h2>Sådan bruger du køleskabsfunktionen</h2>

            <div class="text-wrapper">
                <p class="lg-strong text-black">Scan stregkoden</p>
                <p class="text-black">Hvis en vare er fra Salling Group (Netto, føtex eller Bilka), så kan du scanne stregkoden. Du bliver automatisk spurgt, om den scannet vare er korrekt. Alternativt kan du indtaste stregkoden ved at klikke på kamera-feltet.</p>
            </div>

            <div class="text-wrapper">
                <p class="lg-strong text-black">Upload et billede</p>
                <p class="text-black">Tag et billede med din mobiltelefon og upload det ved at klikke på den hvide kasse. Vores system vil automatisk generere en liste over varerne på billedet, hvor du manuelt skal godkende, om den er korrekt. Er den ikke korrekt eller mangler du en vare, kan du manuelt indtaste den.</p>
            </div>

            <div class="text-wrapper">
                <p class="lg-strong text-black">Automatisk indtastning af vare</p>
                <p class="text-black">Vores system kan modtage manuel indtastning af vare. Det er dit ansvar at præcisere indtastningen, så husk derfor mængden af varen (fx 4 stk., 500 ml, 200 g).</p>
            </div>

            <button class="primary">
                <div class="btn-wrapper">
                    <p>Det er forstået</p>
                </div>
            </button>    
        </div>
    </BottomSheet>

    <!-- Køleskab -->
    <BottomSheet :isOpen="showFridge" :close="() => showFridge = false">
        <div class="sheet-wrapper">
            <h2>Vi fandt følgende varer:</h2>
            <div class="list-item-wrapper"></div>
            <h3>Manglede vi noget?</h3>
            <div class="form-wrapper">
                <label><p class="base-strong">Skriv varens navn inkl. antal / mængde</p></label>
                <input placeholder="f.eks. 5 bananer eller 400ml 18% fløde"/>
                <div class="helper-text">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path class="i-str-black" d="M10.3896 13.1963C10.4517 13.3639 10.5752 13.501 10.7334 13.5801L10.8037 13.6104L14.5586 15L10.8037 16.3896C10.6361 16.4517 10.499 16.5752 10.4199 16.7334L10.3896 16.8037L9 20.5586L7.61035 16.8037L7.58008 16.7334C7.51234 16.5978 7.40222 16.4877 7.2666 16.4199L7.19629 16.3896L3.44043 15L7.19629 13.6104C7.36394 13.5483 7.50104 13.4248 7.58008 13.2666L7.61035 13.1963L9 9.44043L10.3896 13.1963Z" stroke-linejoin="round"/>
                        <path class="i-str-black" d="M17.8496 5.73633C17.9117 5.90399 18.0351 6.04109 18.1934 6.12012L18.2637 6.15039L20.5586 7L18.2637 7.84961C18.096 7.91165 17.9589 8.0351 17.8799 8.19336L17.8496 8.26367L17 10.5586L16.1504 8.26367L16.1201 8.19336C16.0411 8.0351 15.904 7.91165 15.7363 7.84961L13.4404 7L15.7363 6.15039C15.904 6.08835 16.0411 5.9649 16.1201 5.80664L16.1504 5.73633L17 3.44043L17.8496 5.73633Z" stroke-linejoin="round"/>
                    </svg>
                    <p class="sm-regular">AI</p>
                </div>
                <button class="tertiary">
                    <div class="icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path class="i-str-black" d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="btn-wrapper">
                        <p style="color: var(--color-text-black);">Tilføj</p>
                    </div>
                </button>
            </div>
            <div class="divider">
                <div class="line"></div>
            </div>
            <button class="primary">
                <div class="btn-wrapper">
                    <p>Godkend</p>
                </div>
                <div class="icon-wrapper">
                    <svg width="25" height="24" viewBox="0 0 25 24">
                    <path class="i-str-white" d="M9.5 5L16.5 12L9.5 19" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>    
        </div>
    </BottomSheet>

    <!-- Stregkode -->
    <BottomSheet :isOpen="showStregkode" :close="() => showStregkode = false">
        <div class="sheet-wrapper">
            <div class="form-wrapper">
                <label><p class="base-strong">Indtast stregkode</p></label>
                <input placeholder="0000-0000-0000-0000"/>
                <div class="helper-text">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path class="i-str-black" d="M12 17V12V10M12 7H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="sm-regular">Gælder kun varer fra Salling Group</p>
                </div>
            </div>
            <div class="divider">
                <div class="line"></div>
                <p class="sm-regular grey-text">eller</p>
                <div class="line"></div>
            </div>
            <div class="form-wrapper">
                <label><p class="base-strong">Skriv varens navn inkl. antal / mængde</p></label>
                <input placeholder="f.eks. 5 bananer eller 400ml 18% fløde"/>
                <div class="helper-text">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path class="i-str-black" d="M10.3896 13.1963C10.4517 13.3639 10.5752 13.501 10.7334 13.5801L10.8037 13.6104L14.5586 15L10.8037 16.3896C10.6361 16.4517 10.499 16.5752 10.4199 16.7334L10.3896 16.8037L9 20.5586L7.61035 16.8037L7.58008 16.7334C7.51234 16.5978 7.40222 16.4877 7.2666 16.4199L7.19629 16.3896L3.44043 15L7.19629 13.6104C7.36394 13.5483 7.50104 13.4248 7.58008 13.2666L7.61035 13.1963L9 9.44043L10.3896 13.1963Z" stroke-linejoin="round"/>
                        <path class="i-str-black" d="M17.8496 5.73633C17.9117 5.90399 18.0351 6.04109 18.1934 6.12012L18.2637 6.15039L20.5586 7L18.2637 7.84961C18.096 7.91165 17.9589 8.0351 17.8799 8.19336L17.8496 8.26367L17 10.5586L16.1504 8.26367L16.1201 8.19336C16.0411 8.0351 15.904 7.91165 15.7363 7.84961L13.4404 7L15.7363 6.15039C15.904 6.08835 16.0411 5.9649 16.1201 5.80664L16.1504 5.73633L17 3.44043L17.8496 5.73633Z" stroke-linejoin="round"/>
                    </svg>
                    <p class="sm-regular">AI</p>
                </div>
            </div>
            <button class="primary">
                <div class="btn-wrapper">
                    <p>Fortsæt</p>
                </div>
                <div class="icon-wrapper">
                    <svg width="25" height="24" viewBox="0 0 25 24">
                    <path class="i-str-white" d="M9.5 5L16.5 12L9.5 19" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>    
        </div>
    </BottomSheet>

</template>

<style scoped>

h2, h3 {
    color: var(--color-text-black);
    text-align: center;
}

.text-black {
    color: var(--color-text-black);
}

input {
  width: 100%;
  padding: 8px;
  height: 48px;
  border-radius: 2px;
  border: 1px solid var(--color-border-grey-default);
  font-family: 'Fotext-Regular';
  font-size: 16px;
  outline: none;
}

input:focus {
    border: 2px solid var(--color-border-primary);
    outline: none;
}

.sheet-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
}

.helper-text {
    display: flex;
    gap: 2px;
}

.list-item-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;

    /* delete */
    border: 1px solid black;
    height: 200px;
}

.base-strong, .sm-regular {
    color: var(--color-text-black);
}

.header-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0px;
}

.icon-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 8px 0px;
}

.video-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.video-wrapper {
    display: flex;
    flex-direction: column;
    border: 4px solid var(--color-border-primary);
    border-radius: 32px;
    overflow: hidden;
    height: 200px;
    align-items: center;
}

video {
    width: 100%;
    position: relative;
    top: -24px;
    z-index: 0;
}

.info-box {
    background-color: var(--color-surface-default);
    text-align: center;
    width: fit-content;
    padding: 8px 24px;
    border-radius: 16px 16px 0px 0px;
    position: relative;
    top: -90px;
    z-index: 1;
}

.centered-text {
    text-align: center;
}

.picture-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.upload-wrapper {
    background-color: var(--color-surface-white);
    display: flex;
    flex-direction: column;
    border: 4px solid var(--color-border-primary);
    border-radius: 32px;
    overflow: hidden;
    height: 140px;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.grey-text {
    color: var(--color-text-grey-default);
}

.divider {
    display: flex;
    align-items: center;
    gap: 8px;
}

.line {
    background: var(--color-border-grey-default);
    width: 100%;
    height: 1px;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

</style>