<script setup>
import dogs from './components/icons/dogs.vue';
</script>

<template>
  <header>
    <img class="logo" src="../img/logoDogs.png" alt="">
    <div class="container_pesquisar">
      <div class="pesquisar">
        <img src="../img/pesquisar.svg" alt="">
        <input type="text" placeholder="Pesquise uma Raça" id="inputPesquisar">
      </div>
      <button id="btnPesquisar" class="btn_buscar">Buscar</button>
    </div>
  </header>

  <main>
    <div id="container" class="container">
      <dogs />
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

.logo{
  width: auto;
  height: 25vh;
}

.container_pesquisar{
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
