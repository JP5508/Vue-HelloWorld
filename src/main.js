//Importamos createApp diretamente da CDN do Vue 3.
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

//Criamos um objeto App com um template contendo nosso "Hello, Vue.js!".
const App = {
  template: `<h1>Hello, Vue.js!</h1>`
}
//createApp(App).mount('#app') monta o app dentro do elemento com id="app" no HTML.
createApp(App).mount('#app')
