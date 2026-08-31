# Cenário 4 — Casos de teste manuais do SauceDemo

## Dados utilizados

- **URL:** https://www.saucedemo.com
- **Usuário:** `standard_user`
- **Senha:** `secret_sauce`
- **Produtos:** Sauce Labs Backpack e Sauce Labs Bike Light
- **Nome:** Guilherme
- **Sobrenome:** Teste
- **CEP:** 88400-000

Cada caso deve iniciar com uma nova sessão e o carrinho vazio.

## CT-01 — Login com credenciais válidas

**Pré-condições:** Usuário na página inicial do SauceDemo e sem sessão ativa.

**Passos:**
1. Preencher o campo Username com `standard_user`.
2. Preencher o campo Password com `secret_sauce`.
3. Clicar em **Login**.

**Resultado esperado:**  
O usuário deve ser direcionado para a página de produtos. O título **Products** e a lista de produtos devem ser exibidos.

---

## CT-02 — Login com dados inválidos

**Pré-condições:** Usuário na página inicial e sem sessão ativa.

**Passos:**
1. Informar o usuário `standard_user`.
2. Informar uma senha incorreta.
3. Clicar em **Login**.
4. Repetir o teste deixando usuário ou senha em branco.

**Resultado esperado:**  
O acesso não deve ser permitido. O sistema deve apresentar uma mensagem informando que os dados estão incorretos ou que existe um campo obrigatório sem preenchimento.

---

## CT-03 — Adicionar produtos ao carrinho

**Pré-condições:** Usuário autenticado e carrinho vazio.

**Passos:**
1. Localizar o produto **Sauce Labs Backpack**.
2. Clicar em **Add to cart**.
3. Localizar o produto **Sauce Labs Bike Light**.
4. Clicar em **Add to cart**.
5. Verificar o ícone do carrinho.
6. Abrir o carrinho.

**Resultado esperado:**  
O contador do carrinho deve apresentar o número `2`. Os dois produtos devem aparecer no carrinho com seus respectivos nomes, quantidades e preços.

---

## CT-04 — Remover produto do carrinho

**Pré-condições:** Carrinho contendo os dois produtos.

**Passos:**
1. Abrir o carrinho.
2. Remover o produto **Sauce Labs Bike Light**.
3. Verificar o contador e os produtos restantes.
4. Adicionar novamente o produto para continuar o fluxo principal.

**Resultado esperado:**  
O produto removido não deve mais aparecer no carrinho e o contador deve ser atualizado para `1`. Ao adicioná-lo novamente, o contador deve voltar para `2`.

---

## CT-05 — Preencher os dados do checkout

**Pré-condições:** Usuário autenticado e carrinho contendo os dois produtos.

**Passos:**
1. Abrir o carrinho.
2. Clicar em **Checkout**.
3. Informar `Guilherme` no campo First Name.
4. Informar `Teste` no campo Last Name.
5. Informar `88400-000` no campo Postal Code.
6. Clicar em **Continue**.

**Resultado esperado:**  
O sistema deve apresentar a página de resumo do pedido. Os produtos adicionados devem continuar no pedido, com quantidades e preços corretos.

---

## CT-06 — Validar campos obrigatórios do checkout

**Pré-condições:** Usuário na página **Checkout: Your Information**.

**Passos:**
1. Clicar em **Continue** sem preencher os campos.
2. Preencher somente nome e sobrenome e tentar novamente.
3. Repetir deixando, a cada tentativa, um dos campos vazio.

**Resultado esperado:**  
O sistema não deve avançar enquanto houver campo obrigatório vazio. Uma mensagem deve indicar o primeiro campo que precisa ser preenchido, sem apagar os demais dados informados.

---

## CT-07 — Conferir e finalizar o pedido

**Pré-condições:** Carrinho com os dois produtos e dados do comprador preenchidos corretamente.

**Passos:**
1. Na página de resumo, conferir os produtos e seus valores.
2. Verificar se o subtotal corresponde à soma dos produtos.
3. Verificar se o total corresponde ao subtotal mais o imposto.
4. Clicar em **Finish**.

**Resultado esperado:**  
O sistema deve apresentar a tela de confirmação com a mensagem **Thank you for your order!**. O pedido deve ser concluído uma única vez e o botão **Back Home** deve ser exibido.

---

## CT-08 — Retornar à página de produtos

**Pré-condições:** Pedido concluído com sucesso.

**Passos:**
1. Clicar em **Back Home**.
2. Verificar a página de produtos e o carrinho.

**Resultado esperado:**  
O usuário deve retornar à página de produtos e o carrinho deve estar vazio, permitindo iniciar uma nova compra.