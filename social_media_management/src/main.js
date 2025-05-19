import './index.css'
import 'floating-vue/dist/style.css'
import "./assets/css/overrideTooltip.css"
import "./assets/css/proseMirror.css"

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { vTooltip } from 'floating-vue'
import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

const app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)

app.directive('tooltip', vTooltip)

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

app.mount('#app')
