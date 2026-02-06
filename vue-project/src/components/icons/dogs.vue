<script setup>

const inputPesquisar = document.getElementById('inputPesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')

const header = document.querySelector('header')
const main = document.querySelector('main')

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
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

inputPesquisar.addEventListener('keydown', async (evento) => {
    const h2Raca = document.getElementById('racaEscolhida')

    if (evento.key === 'Enter' || evento.keyCode === 13) {
        if (inputPesquisar.value != '') {
            const imagens = await buscarImagens(inputPesquisar.value)
            console.log(imagens)
            header.style.display = 'none'
            imagens.forEach(img => exibirCachorro(img))
            h2Raca.textContent = inputPesquisar.value
        } else {
            alert('Digite uma raça existente no campo de pesquisa')
        }
    }

})

btnPesquisar.addEventListener('click', async () => {
    const h2Raca = document.getElementById('racaEscolhida')
    if (inputPesquisar.value != '') {
        const imagens = await buscarImagens(inputPesquisar.value)
        header.style.display = 'none'
        imagens.forEach(img => exibirCachorro(img))
        h2Raca.textContent = inputPesquisar.value
    } else {
        alert('Digite uma raça existente no campo de pesquisa')
    }
})

</script>

<template>
    <main>
        <h2 id="racaEscolhida"></h2>
        <div class="container" id="containerImagens">
            <!-- <div class="quadro">
            
        </div> -->
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


.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 5%;
    gap: 10px;
    height: 100%;
    width: 100%;
}

.quadro {
    width: 20%;
    height: 45%;
}

.quadro img {
    width: fit-content;
}
</style>