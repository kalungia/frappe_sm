import './index.css'
import 'floating-vue/dist/style.css'
import "./assets/css/overrideTooltip.css"
import "./assets/css/proseMirror.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initSocket } from './socket'
import router from './router'
import App from './App.vue'

import { vTooltip } from 'floating-vue'
import {
  FrappeUI,
  Button,
  Input,
  TextInput,
  FormControl,
  ErrorMessage,
  Dialog,
  Alert,
  Badge,
  setConfig,
  frappeRequest,
  FeatherIcon,
} from 'frappe-ui'

let globalComponents = {
  Button,
  TextInput,
  Input,
  FormControl,
  ErrorMessage,
  Dialog,
  Alert,
  Badge,
  FeatherIcon,
}

// create a pinia instance
let pinia = createPinia()

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)
app.use(FrappeUI)
app.use(pinia)
app.use(router)
// app.use(translationPlugin)
// app.use(posthogPlugin)
app.directive('tooltip', vTooltip)
for (let key in globalComponents) {
  app.component(key, globalComponents[key])
}

let socket
if (import.meta.env.DEV) {
  frappeRequest({ url: '/api/method/frappe_sm.www.frappe_sm.get_context_for_dev' }).then(
    (values) => {
      for (let key in values) {
        window[key] = values[key]
      }
      socket = initSocket()
      app.config.globalProperties.$socket = socket
      app.mount('#app')
    },
  )
} else {
  socket = initSocket()
  app.config.globalProperties.$socket = socket
  app.mount('#app')
}