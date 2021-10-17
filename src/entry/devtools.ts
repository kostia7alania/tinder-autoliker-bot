import { createApp } from 'vue'
import App from '../view/devtools.vue'

chrome.devtools.panels.create('chrome-extension-name', '', 'devtools.html')
createApp(App).mount('#app')
