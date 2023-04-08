import { createApp } from 'vue'
import App from './app'
import router from './app/router'
import UiKit from '@/shared/ui'

import '@/app/variables.css'

const app = createApp(App)

UiKit.forEach((ui) => {
  app.component(ui.name, ui)
})

app.use(router)

app.mount('#app')