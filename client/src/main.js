import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//pinia es un gestor de estados globale, los estados son informacion a la que puedes accder desde cualquier lugar de la apliacion
//Despues de instalr pinia, llama a create pinia para configurarlo
import { createPinia } from 'pinia';
//libreria para que los estados globales de pinia se guarden en el localStorage
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'semantic-ui-css/semantic.min.css';

//creamos una instancia de pinia
const pinia= createPinia();
//volvemos pinia persistente, lo que significa que los estados se van a poder guardar en el localStorage
pinia.use(piniaPluginPersistedstate);
//le agregamos pinia a la apliacion principal
createApp(App).use(pinia).use(router).mount('#app')
