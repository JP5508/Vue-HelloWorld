//Importamos createApp diretamente da CDN do Vue 3
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

//App é um objeto JavaScript que representa o componente raiz da sua aplicação
//Esse objeto possui uma propriedade chamada template, que é uma string HTML que o Vue vai renderizar
const App = {
  //DATA() É uma função que retorna um objeto com as variáveis que o Vue vai acompanhar
  data() {
    return {
      //variáveis (para usar ela no html/template, use {{var}})
      teste1: 'Vue.js com dados dinâmicos!',
      teste2: 'Vue.js teste de váriaveis!'
    }
  },
  //METHODS É um objeto onde você define ações — geralmente, quando o usuário faz algo (clicar, digitar, etc.).
  methods: {
    //funções (para usar ela depois será usado @click="nome da função")
    mudarTexto() {
      //THIS. altera o valora da variável TESTE
      //this.variavel = 'novo valor'
      this.teste1 = 'Você clicou e a mensagem mudou!'
    }
  },
  //TEMPLATE é o HTML a ser renderizado na tela e no lugar de chaves é usado aspas simples
  template: `
  <link href="src/Style.css" rel="stylesheet"></link>
  <h1>Hello World </h1>
  <p>26/05/2025 - Eae mundo, meu Vue.js ta funcionando!</p>
  <p>27/05/2025 - Entendi como funciona essa parte, vou ver mais coisas</p>
  <!-- aqui a gente mostra a VARIAVEL criada no DATA() -->
  {{teste1}}
  <!-- aqui a gente chama o método MUDAR TEXTO ao clicar no botão -->
  <br><button @click="mudarTexto" class="btn btn-dark">Clique aqui</button>
  <br>{{teste2}}
  `//aparentemente ele só aceita 1 template
  //template: '{{teste2}}',
  //template: '{{teste1}}'
}


//createApp(App) cria a instância da aplicação Vue usando o componente App como raiz
//.mount('#app') diz para o Vue "renderizar e colocar essa aplicação dentro do elemento HTML que tem o id app"
createApp(App).mount('#app')

//data()	Guarda os valores que mudam | Variáveis do app
//methods	Executa ações/funções | Botões, eventos, lógica