# Introdução-ao-ReactJS-DIO
curso de introdução ao ReactJS

# ReactJS
Curso-ReactJS-DIO

## Aula 1.1 criando o projeto
**Instalando package.json**
No terminal
npm init

**Instalando React**
OBS: Utilizado  no curso não obrigatório(
No terminal

npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1)

**Instalação pasta public**

npx create-react-app MeuProjeto.

**Navegue até o prjeto**

cd MeuProjeto

**Iniciando o projeto**
Dentro do projeto
npm start

## Aula 1.2 Renderizando 

Renderizando e elementos.

Children

props

## Aula 1.3 Estados e ciclos de vida

inicialização


Montagem

Atualização

Desmontagem

## Aula 2 WebPAc
**Instalando package.json**
No terminal
npm init

**Criação do arquivo webpack.config.js**

npm i -D webpack webpack-cli

npm install --save-dev webpack webpack-cli

**Criar no visual studio no projeto o seguinte arquivo**

webpack.config.js

**Edite o packege.json**

em scripts escreva "build":"webpack --mode production" e apague oq estiver lá dentro

**Edite o webpack.config.js**

const path = require('path')

module.exports = {
 entry: './teste.js', caminho do do arquivo de largada do projeto
 output:{
     path: path.resolve(__dirname, 'dist'),  // OBS: dois underline
     filename: 'bundle.js'
 }
}

**Instale os plugins**

npm install -D html-webpack-plugin

**Inicie a build**

npm run build

**Adicionar o babel dentro do projeto**

npm i @babel/core babel-loader @babel/present-env @babel/present-react --save-dev
ou
npm install -D babel-loader @babel/core
 @babel/preset-env
 @babel/preset-react
@babel/preset-env @babel/plugin-proposal-class-properties 
@babel/plugin-transform-react-jsx

**Adicionando mais comandos ao Webpack.config**
const path = require('path')

module.exports = {
 entry: './src/index.js',
 output:{
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
 },
 module:{
    rules: [
        {
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]

},

}

**Cria o Index.html**
Estrutura html 5 com a div com o id app

**criar App.JS**

**criar Index.js**
 com as devidas importações e o render()

**Criar o arquivo .babelrc**
adcionar os presets

{
    "presents":[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

**instarlar React react-DOM**

npm i react react-dom

**rodar**

npm run dev

npm rum start:dev

## Aula 2.1 Instalação do ESLint

**No terminal**

npm instal --save eslint babel-eslint eslint-plugin-react eslint-watch

**adciona no pac...jason**
em script
eslint": "eslint .src/*.js"

**em wbpack confi**
serve para visualização de erros

module.exports = {
    devtool: 'source.map'
.
.
.

**No package.jason**
/*"webpack-dev-server":"^3.7.2"*/

npm run eslint


## Aula 3 

### 3.1 Renderizando condicional

Criado condicional ternario, testando utilizando os modulos

### 3.2 Listas e chaves




