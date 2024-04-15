# TesteCypress (Automação de API com Cypress e Cucumber)

## Estrutura do Diretório

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
- **Outros arquivos**:
  - .cypress-cucumber-preprocessorrc.json: Configurações do preprocessador Cypress Cucumber.
  - .gitignore: Arquivos e diretórios ignorados pelo Git.
  - cypress.config.js: Configurações do Cypress.
  - package-lock.json: Lista exata de dependências do projeto (gerada pelo npm).
  - package.json: Metadados do projeto e lista de dependências do Node.js.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando: npm install

## Como Rodar

npm run cypress:run

## Esse README.md fornece uma visão geral da estrutura do projeto, instruções de instalação e execução dos testes, além de explicar a integração com o GitHub Actions para notificações no Slack.
