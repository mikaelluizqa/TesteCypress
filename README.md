# Projeto Cypress

Projeto automação (Back-end) com a ferramenta Cypress com BDD.

## 1. Descrição do framework: Cypress & Cucumber

 - **Cypress** é uma ferramenta de teste (automatizado) de front-end e back-end criada para a web moderna. Cypress consiste em um aplicativo gratuito, de código aberto , instalado localmente e um serviço de Dashboard para gravar os testes.
 > Fonte: [docs.cypress.io](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn)

- **Cucumber** lê especificações executáveis ​​escritas em texto simples e valida se o software faz o que essas especificações dizem. As especificações consistem em vários exemplos ou cenários.
Cada cenário é uma lista de etapas para o Cucumber trabalhar, é verificado se o software está de acordo com a especificação.
> Fonte: [cucumber.io/docs](https://cucumber.io/docs/guides/overview/)


## 2. Dependências do projeto & Dicas

 - Este projeto tem as dependências listadas abaixo, e devem ser baixadas/instaladas na sua máquina para execução do mesmo:
	 - Node JS
		 - [Link com as orientações para download/instalação](https://nodejs.org/en/download/).
	 - NPM
		 - [Link com as orientações para download/instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
 - O Sistema Operacional recomendado para execução deste projeto é o Linux Ubuntu a partir da versão 20.04.

## 3. Passo a passo para instalação e execução

1. npm install -f
2. npm run cypress:execution

## 4. Passo a passo para execução do projeto & Report

Há duas formas de executar os testes neste projeto.

 1. O Primeiro é através da execução no próprio terminal, basta executar o comando abaixo:

` npm run cypress:run`

> Ao executar este comando, será gerado automaticamente os relatórios mochawesome (um por .feature) nos formatos Json e Html.

2. A segunda maneira, é através da interface gráfica do Cypress, basta apenas executar o comando a seguir:

`npm run cypress:execution `

> Ao executar este comando, será gerado automaticamente os relatórios mochawesome (um por .feature) nos formatos Json e Html.

Observação: Ao executar este projeto através do comando ` npm run cypress:run`, é de boa prática apagar os relatórios e capturas de tela (Caso não seja mais útil). Para realizar esta "limpeza", basta executar apenas o comando:
<<<<<<< HEAD
`npm run report:cleanup`
=======
`npm run report:cleanup`
>>>>>>> c043dd9605df0bb181850d5959471fa7b0a00f0c
