import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import ThokaUI from './entry'

createApp(App).use(ThokaUI).use(router).mount('#app')
