import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Http from './http'
import installIcons from '@/assets/icons'
const app = createApp(App)
app.config.globalProperties.$http = Http.axiosHttp();

app.use(store).use(router).mount('#app');
installIcons(app)


