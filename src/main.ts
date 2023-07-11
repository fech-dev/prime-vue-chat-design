import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import './style.css';

createApp(App).use(PrimeVue).mount('#app');
