//Importamos createApp diretamente da CDN do Vue 3
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

//App é um objeto JavaScript que representa o componente raiz da sua aplicação
//Esse objeto possui uma propriedade chamada template, que é uma string HTML que o Vue vai renderizar
const App = {
  template: `
  <h1>Hello World </h1>
  <p>26/05/2025 - Eae mundo, meu Vue.js ta funcionando!</p>
  <p>27/05/2025 - Entendi como funciona essa parte, vou ver mais coisas</p>
  `
}


//createApp(App) cria a instância da aplicação Vue usando o componente App como raiz
//.mount('#app') diz para o Vue "renderizar e colocar essa aplicação dentro do elemento HTML que tem o id app"
createApp(App).mount('#app')
