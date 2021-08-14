import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@utrecht/design-tokens/dist/theme/index.css';
import '@utrecht/component-library-css/dist/bem.css';
import '@utrecht/component-library-css/dist/html.css';
import { defineCustomElements } from '@utrecht/web-component-library-stencil';

createApp(App).use(router).mount('#app');
defineCustomElements();
