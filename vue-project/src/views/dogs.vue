<script setup>

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const cachorros = ref([]);
const raca = route.params.raca;

const inputPesquisar = document.getElementById('inputPesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')

const header = document.querySelector('header')

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
            <button @click="router.push('/')"><img src="../../img/voltar.png" alt=""></button>
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
header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vh;
}

.logo {
    width: auto;
    height: 25vh;
}

.container_pesquisar {
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.pesquisar {
    display: flex;
    justify-content: space-between;
    place-self: center;
    border: 2px solid black;
    border-radius: 25px;
    padding: .5vh .5vw;
    width: 40%;
    height: 3vh;
    gap: 15px;
}

.pesquisar img {
    width: 2vh;
}

.pesquisar input {
    width: 100%;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border: none;
}

.pesquisar input:focus {
    outline: none;
    font-size: 14px;
}

.pesquisar input:focus::placeholder {
    color: transparent;
}

.btn_buscar {
    padding: 1vh 1vw;
    border-radius: 25px;
    background-color: white;
    font-weight: 700;
    font-style: bold;
}

.btn_buscar:hover {
    background-color: lightgray;
}

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