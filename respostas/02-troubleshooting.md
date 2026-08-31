# Cenário 2 — Investigação da atualização automática de estoque

Eu trataria o problema como prioridade crítica, pois está causando vendas de produtos sem estoque e cancelamentos que prejudicam o cliente.

Como a atualização manual funciona, entendo que o anúncio está vinculado corretamente e que a comunicação com o marketplace está disponível. A investigação deve se concentrar principalmente no processo automático.

## Passo a passo da investigação

1. **Levantar os dados dos anúncios afetados**

   Reuniria os IDs dos 38 anúncios, seus SKUs, o horário em que o estoque chegou a zero e a origem da alteração, como venda, ajuste manual ou atualização do ERP.

2. **Reduzir o impacto**

   Solicitaria a atualização manual dos anúncios afetados enquanto o problema é investigado. Como não tenho acesso ao painel do marketplace, pediria ao cliente uma evidência ou confirmação do novo status.

3. **Analisar um produto afetado**

   Verificaria o histórico do produto para confirmar se o estoque realmente chegou a zero e se o sistema utiliza estoque físico ou estoque disponível. Também conferiria o horário e o processo responsável pela alteração.

4. **Localizar onde o fluxo parou**

   Pesquisaria pelo SKU e pelo horário nos logs e filas da integração para descobrir se o evento foi criado, entrou na fila, foi processado ou apresentou erro antes do envio ao marketplace.

5. **Comparar o processo automático com o manual**

   Compararia os dois processos para verificar se utilizam as mesmas regras, credenciais e informações. Isso pode revelar algum filtro existente somente no processo automático.

6. **Reproduzir e validar**

   Em homologação, alteraria o estoque de um produto de 1 para 0 utilizando a mesma origem dos casos afetados. Depois da correção, validaria também a reposição de estoque e o processamento de vários produtos.

## Principais hipóteses

- O processo automático não considera corretamente o valor zero.
- A origem da alteração de estoque não está gerando o evento de sincronização.
- O serviço ou a fila responsável pelo processamento está parado ou com mensagens acumuladas.
- Os anúncios afetados possuem algum vínculo, depósito ou configuração em comum.
- O evento está sendo descartado como duplicado ou antigo.
- A falha acontece antes da etapa responsável por registrar o log.

## Conclusão

A principal suspeita está no gatilho ou no processamento automático, pois não existe registro do envio de estoque zero e a atualização manual funciona corretamente. Após identificar a causa, eu validaria os 38 anúncios e acompanharia novas alterações de estoque para confirmar que o problema não voltou a ocorrer.