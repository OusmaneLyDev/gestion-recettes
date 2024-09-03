import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import FontAwesomeIcon from './fontawesome'; 

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// app.component('font-awesome-icon', FontAwesomeIcon); 
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
