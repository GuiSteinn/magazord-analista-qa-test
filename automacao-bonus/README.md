# Bônus — Automação E2E com Cypress

## Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- Page Object Model
- Fixtures

## Instalação

Acesse a pasta da automação e instale as dependências:

```bash
cd automacao-bonus
npm install 

## Execução

Executar em modo headless:

```bash
npm test
```

Abrir a interface do Cypress:

```bash
npm run cypress:open
```

## Estrutura

- `cypress/e2e`: contém o cenário automatizado.
- `cypress/fixtures`: contém as credenciais e os produtos utilizados.
- `cypress/support/pages`: contém os Page Objects.
- `cypress/support/e2e.js`: realiza a limpeza de cookies e armazenamento local.
- `cypress.config.js`: contém as configurações gerais.

## Cenário automatizado

O teste executa o seguinte fluxo:

1. autenticação;
2. adição de dois produtos;
3. validação do carrinho;
4. preenchimento de nome, sobrenome e CEP gerados dinamicamente;
5. validação do resumo;
6. finalização e confirmação do pedido.