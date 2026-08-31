# Cenário 1 — Testes de Integração entre Marketplace e ERP

Para os testes, eu utilizaria produtos e pedidos de um ambiente de homologação. Em cada caso, validaria os dados no sistema de origem, no sistema de destino e também os logs da integração.

## Cenários de sucesso

### CT-01 — Cadastro e atualização de anúncio e preço

**Pré-condição:** Produto cadastrado no Magazord com SKU, descrição, preço e estoque válidos.

**Execução:**
1. Enviar o produto para publicação no marketplace;
2. Verificar se o anúncio foi criado;
3. Alterar o preço no Magazord;
4. Executar ou aguardar a sincronização.

**Resultado esperado:**  
O anúncio deve ser criado no marketplace com o produto e o preço corretos. Após a alteração, somente o anúncio relacionado ao SKU deve receber o novo preço. A integração deve registrar o processamento com sucesso nos logs.

---

### CT-02 — Sincronização de estoque

**Pré-condição:** Produto publicado no marketplace e vinculado ao mesmo SKU no Magazord e no ERP.

**Execução:**
1. Definir o estoque do produto como 10 unidades;
2. Reduzir o estoque para 5 unidades;
3. Verificar o estoque apresentado nos sistemas;
4. Depois, alterar o estoque para zero.

**Resultado esperado:**  
O marketplace e o ERP devem receber a quantidade atualizada. Quando o estoque chegar a zero, o anúncio deve ficar indisponível ou pausado por falta de estoque, impedindo novas vendas.

---

### CT-03 — Processamento de novos pedidos

**Pré-condição:** Produto publicado, com estoque disponível, e integração ativa.

**Execução:**
1. Realizar uma compra no marketplace.
2. Confirmar o pagamento do pedido.
3. Aguardar o processamento da integração.
4. Consultar o pedido no Magazord e no ERP.

**Resultado esperado:**  
O pedido deve ser importado uma única vez, contendo os produtos, quantidades, dados do cliente, endereço, frete, descontos e valor total corretos. O estoque do produto também deve ser reservado ou reduzido conforme a regra do sistema.

---

### CT-04 — Sincronização do faturamento

**Pré-condição:** Pedido importado com sucesso e disponível para faturamento no ERP.

**Execução:**
1. Faturar o pedido no ERP.
2. Informar os dados da nota fiscal e do envio.
3. Aguardar a sincronização com o Magazord e o marketplace.

**Resultado esperado:**  
O pedido deve receber o status de faturado. Os dados da nota fiscal e do rastreamento devem ser enviados para o pedido correto no marketplace, sem duplicidade.

## Cenários de exceção ou falha

### CT-05 — Marketplace indisponível durante a atualização de estoque

**Execução:**  
Simular uma indisponibilidade ou timeout do marketplace no momento em que o estoque do produto chegar a zero.

**Resultado esperado:**  
A atualização não deve ser perdida. O sistema deve registrar o erro, realizar uma nova tentativa e permitir o reprocessamento. Após o marketplace voltar a funcionar, o estoque deve ser sincronizado corretamente.

---

### CT-06 — Produto com SKU sem vínculo

**Execução:**  
Tentar sincronizar um produto cujo SKU não esteja cadastrado ou vinculado corretamente no marketplace ou no ERP.

**Resultado esperado:**  
A integração não deve atualizar outro produto por engano. O item deve apresentar uma mensagem clara informando o problema de vínculo, e os demais produtos devem continuar sendo processados normalmente.

---

### CT-07 — Recebimento duplicado do mesmo pedido

**Execução:**  
Enviar duas vezes o mesmo evento ou notificação de pedido para a integração.

**Resultado esperado:**  
O pedido deve ser cadastrado somente uma vez. Não deve ocorrer cobrança, faturamento ou redução de estoque em duplicidade.

---

### CT-08 — Atualizações de estoque fora de ordem

**Execução:**  
Enviar uma atualização de estoque para zero e logo depois uma reposição para 10 unidades, simulando atraso no processamento da primeira mensagem.

**Resultado esperado:**  
O sistema deve considerar a atualização mais recente. O produto deve terminar com 10 unidades e o anúncio deve voltar a ficar disponível, sem permanecer pausado incorretamente.

## Priorização dos testes

Eu começaria pelos testes relacionados ao estoque e ao processamento de novos pedidos, pois uma falha nesses fluxos pode permitir a venda de produtos sem estoque, gerar pedidos duplicados ou causar perda de vendas.

A ordem seria:

1. **Prioridade crítica:** sincronização de estoque, principalmente quando chega a zero, e processamento de novos pedidos sem duplicidade.
2. **Prioridade alta:** faturamento, nota fiscal, rastreamento e atualização de preços.
3. **Prioridade média:** cadastro de anúncios, validações de campos e situações com dados inválidos.

Também executaria primeiro um teste rápido do fluxo completo, desde a publicação do produto até o faturamento do pedido. Depois disso, executaria os cenários de falha e recuperação.