<!-- Título do Projeto -->
<h1 align="center">TesteCypress</h1>

<!-- Descrição do Projeto -->
<p align="center">Projeto de automação de testes de API com Cypress e Cucumber, focado em qualidade e eficiência.</p>

<!-- Logo do Cypress -->
<p align="center">
  <img src="cypress_logo.png" alt="Cypress Logo" width="200"/>
</p>

<!-- Badges (Opcional) -->
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/seu-usuario/TesteCypress/CI?label=build&logo=github&style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/seu-usuario/TesteCypress?style=flat-square">
</p>

<!-- Tópicos do Projeto -->
<p align="center">
  <a href="#-visão-geral">Visão Geral</a> •
  <a href="#-estrutura-do-diretório">Estrutura do Diretório</a> •
  <a href="#-instalação">Instalação</a> •
  <a href="#-como-rodar">Como Rodar</a> •
  <a href="#-github-actions-e-notificações-no-slack">GitHub Actions e Notificações no Slack</a> •
</p>

<!-- Conteúdo do README -->
## 🚀 Visão Geral

Este projeto é uma automação de testes de API usando Cypress e Cucumber. Ele foi desenvolvido com foco na qualidade do código e na eficiência dos testes.

## 📂 Estrutura do Diretório

- **.github/workflows/**: Contém arquivos de configuração para o GitHub Actions.
- **e2e/**: Contém testes de ponta a ponta (end-to-end).
  - **fluxoCadastro.feature**: Arquivo de especificação de teste para o fluxo de cadastro.
  - **step_definitions/fluxoCadastro/**: Definições de passos para o fluxo de cadastro.
    - buscarUsuario.js: Definição de passo para buscar usuário.
    - cadastrarUsuario.js: Definição de passo para cadastrar usuário.
    - deletarUsuario.js: Definição de passo para deletar usuário.
  - **request/fluxoCadastro/**: Requisições para o fluxo de cadastro.
    - buscarUsuario.js: Requisição para buscar usuário.
    - cadastrarUsuario.js: Requisição para cadastrar usuário.
    - deletarUsuario.js: Requisição para deletar usuário.
  - **support/commands/**: Comandos de suporte para os testes de ponta a ponta.

## 💻 Instalação

Para instalar as dependências do projeto, execute o seguinte comando:
npm install

## 🛠️ Como Rodar
Para rodar os testes de automação, utilize o seguinte comando:
npm run cypress:run

Isso irá executar os testes automatizados usando o Cypress.

## 🚀 GitHub Actions e Notificações no Slack

Este projeto está configurado com o GitHub Actions para automatizar os testes e enviar notificações para o Slack. Se houver falhas nos testes, você receberá uma notificação no canal especificado.

<div align="center">Feito com ❤️ por [Mikael Luiz](https://github.com/mikaelluizqa)</div>
