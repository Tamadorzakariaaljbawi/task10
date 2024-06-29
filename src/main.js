/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import store from './store'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(store)
app.use(
  Vue3Toasity,
  {
    autoClose: 3000,
  },
)
registerPlugins(app)

app.mount('#app')
