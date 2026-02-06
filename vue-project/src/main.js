import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa o router que criamos

const app = createApp(App)

app.use(router) // Usa o plugin do router

app.mount('#app')