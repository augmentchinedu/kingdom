import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Desktop from './Desktop/App.vue'
import desktopRouter from './Desktop/router'

import Mobile from './Mobile/App.vue'
import mobileRouter from './Mobile/router'

let app;

if (window.innerHeight > window.innerWidth) {
  app = createApp(Mobile)
  app.use(mobileRouter)
  console.log('Mobile')
} else {
  app = createApp(Desktop)
  app.use(desktopRouter)
  console.log('Desktop')
}

app.use(createPinia())
app.mount('#app')
