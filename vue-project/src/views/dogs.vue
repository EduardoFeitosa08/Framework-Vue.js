<script setup>

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const cachorros = ref([]);
const raca = route.params.raca;

async function buscarImagens() {
    try {
        const url = `https://dog.ceo/api/breed/${raca}/images`
        const response = await fetch(url)
        const imagens = await response.json()
        if(imagens.status === 'success'){
            return imagens.message
        }else{
            router.push('/')
        }
    } catch (error) {
        router.push('/')
    }
    
}

function exibirCachorro(cachorro) {
    const container = document.getElementById('containerImagens')
    const quadro = document.createElement('div')
    const img = document.createElement('img')

    img.src = cachorro
    quadro.appendChild(img)
    quadro.classList.add('quadro')
    container.appendChild(quadro)
}

async function exibirCachorrosPesquisa() {
    const h2Raca = document.getElementById('racaEscolhida')
    const main = document.querySelector('main')

    const imagens = await buscarImagens()
    if(imagens){
        imagens.forEach(img => exibirCachorro(img))
        h2Raca.textContent = raca
        main.style.display = 'block'
    }else{
        
    }
}

onMounted(exibirCachorrosPesquisa)

</script>

<template>
    <main>
        <div class="container_superior" id="containerSuperior">
            <button @click="router.push('/')"><img src="../assets/voltar.png" alt=""></button>
            <h2 id="racaEscolhida">{{ raca }}</h2>
        </div>
        <div class="container" id="containerImagens">
            <div v-for="url in cachorros" :key="url" :href="url" target="_blank">
                <img :src="url" />
            </div>
        </div>
    </main>

</template>

<style scoped>
.container_superior{
    display: flex;
    width: 50%;
    justify-content: space-between;
}

.container_superior button{
    background-color: transparent;
    width: 3vw;
    height: 5vh;
    border: none;
    place-self: center;
}

.container_superior button img{
    width: 100%;
    height: 100%;
}

.container_superior button:hover{
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 20px;
}

main{
    display: none;
}

main h2{
    padding-top: 5vh;
    place-self: center;
    font-weight: 700;
    font-size: 30px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1%;
    gap: 10px;
    width: 100%;
    height: auto;
}

.container :deep(.quadro) {
    width: 250px;
    height: 250px;
}

.container :deep(.quadro img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>