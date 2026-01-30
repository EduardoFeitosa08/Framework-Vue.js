<script setup>

const inputPesquisar = document.getElementById('inputPesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')

const header = document.querySelector('header')
const main = document.querySelector('main')
const container = document.getElementById('container')

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function exibirCachorro(cachorro){
    const img = document.createElement('img')

    img.src = cachorro

    container.appendChild(img)
    main.appendChild(container)

    img.addEventListener('click', function(){
        window.open(cachorro)
    })
    
}

inputPesquisar.addEventListener('keydown', async (evento) => {

    if (evento.key === 'Enter' || evento.keyCode === 13) {
        if (inputPesquisar.value != '') {
            const imagens = await buscarImagens(inputPesquisar.value)
            header.textContent = ''
            imagens.forEach(img => exibirCachorro(img))
        } else {
            alert('Digite uma raça existente no campo de pesquisa')
        }
    }

})

btnPesquisar.addEventListener('click', async () => {
    if (inputPesquisar.value != '') {
        const imagens = await buscarImagens(inputPesquisar.value)
        header.textContent = ''
        imagens.forEach(img => exibirCachorro(img))
    } else {
        alert('Digite uma raça existente no campo de pesquisa')
    }
})

</script>

<template>
    <div>
        a
    </div>

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
</style>