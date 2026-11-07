import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import enrutador from './enrutador/index.js'
import vuetify from './plugins/vuetify.js'

const app = createApp(App)

app.use(createPinia())
app.use(enrutador)
app.use(vuetify)

app.mount('#app')
