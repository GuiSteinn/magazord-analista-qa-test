# Cenário 3 — Validação de alterações cadastrais

**Pré-condição geral:** Usuário autenticado, com permissão para editar clientes, e cadastro de teste aberto na tela de alteração.

## CT-01 — Salvar cadastro com dados válidos

**Tipo:** Positivo

**Passos:**
1. Preencher os campos obrigatórios.
2. Informar nome, CPF, e-mail, telefone e demais dados em formatos válidos.
3. Clicar em **Gravar**.
4. Abrir novamente o cadastro.

**Resultado esperado:**  
O sistema deve salvar os dados, apresentar uma mensagem de sucesso e manter as informações corretamente após reabrir o cadastro.

---

## CT-02 — Validar campos obrigatórios

**Tipo:** Negativo

**Passos:**
1. Deixar um campo obrigatório vazio.
2. Preencher os demais campos corretamente.
3. Clicar em **Gravar**.
4. Repetir o teste para cada campo obrigatório.

**Resultado esperado:**  
O sistema não deve salvar o cadastro e deve informar claramente qual campo precisa ser preenchido. Os outros valores digitados devem permanecer na tela.

---

## CT-03 — Validar CPF correto

**Tipo:** Positivo

**Passos:**
1. Informar um CPF válido.
2. Preencher os outros campos obrigatórios.
3. Salvar o cadastro.

**Resultado esperado:**  
O CPF deve ser aceito e salvo com a máscara correta, sem alterar ou remover seus números.

---

## CT-04 — Validar CPF incorreto

**Tipo:** Negativo

**Passos:**
1. Testar um CPF com dígito verificador inválido.
2. Testar um CPF incompleto.
3. Testar uma sequência repetida, como `111.111.111-11`.
4. Tentar salvar o cadastro.

**Resultado esperado:**  
O sistema deve impedir a gravação e apresentar uma mensagem informando que o CPF é inválido.

---

## CT-05 — Validar CPF duplicado

**Tipo:** Negativo

**Pré-condição:** Existir outro cliente cadastrado com o CPF utilizado no teste.

**Passos:**
1. Informar um CPF que já pertence a outro cliente.
2. Preencher os demais campos.
3. Clicar em **Gravar**.

**Resultado esperado:**  
Caso o CPF deva ser único, o sistema deve impedir a gravação e informar que o documento já está cadastrado.

---

## CT-06 — Validar formato do e-mail

**Tipo:** Positivo e negativo

**Passos:**
1. Testar um e-mail válido, como `usuario.teste@dominio.com.br`.
2. Testar valores sem `@`, sem domínio, com espaços e com dois símbolos `@`.
3. Tentar salvar em cada situação.

**Resultado esperado:**  
O e-mail válido deve ser aceito. Os formatos inválidos devem impedir a gravação e apresentar uma mensagem clara.

---

## CT-07 — Validar telefone

**Tipo:** Positivo e negativo

**Passos:**
1. Informar um celular válido com DDD.
2. Informar um telefone fixo válido.
3. Testar números incompletos, com letras ou com quantidade excessiva de dígitos.
4. Salvar o cadastro em cada situação.

**Resultado esperado:**  
Os telefones válidos devem ser aceitos e formatados corretamente. Os inválidos devem ser rejeitados com uma mensagem de orientação.

---

## CT-08 — Validar limite do campo Nome

**Tipo:** Positivo e negativo

**Pré-condição:** Conhecer o limite máximo `N` definido para o campo.

**Passos:**
1. Informar um nome com `N-1` caracteres.
2. Informar um nome com exatamente `N` caracteres.
3. Informar um nome com `N+1` caracteres.
4. Testar também um valor contendo somente espaços.

**Resultado esperado:**  
Valores dentro do limite devem ser aceitos. O sistema deve impedir ou informar quando o limite for ultrapassado. Um nome contendo somente espaços não deve ser considerado válido.

---

## CT-09 — Validar data de nascimento

**Tipo:** Positivo e negativo

**Passos:**
1. Informar uma data de nascimento válida.
2. Testar uma data futura.
3. Testar uma data inexistente, como `31/02/2026`.
4. Testar o campo com formato incompleto.

**Resultado esperado:**  
A data válida deve ser aceita. Datas futuras, inexistentes ou incompletas devem ser rejeitadas com uma mensagem clara.

---

## CT-10 — Validar alteração do tipo de pessoa

**Tipo:** Positivo e negativo

**Passos:**
1. Selecionar o tipo **Física** e verificar os campos de CPF e RG.
2. Selecionar o tipo **Jurídica**.
3. Verificar se os campos e máscaras são alterados para os dados correspondentes.
4. Tentar salvar um CPF no campo destinado ao CNPJ e vice-versa.

**Resultado esperado:**  
Os campos e suas validações devem acompanhar o tipo de pessoa selecionado. O sistema não deve aceitar CPF no lugar de CNPJ ou documentos com formato inválido.

---

## CT-11 — Fechar a tela sem salvar

**Tipo:** Negativo

**Passos:**
1. Alterar algum dado do cliente.
2. Clicar em **Fechar** ou no `X` da janela.
3. Reabrir o cadastro.

**Resultado esperado:**  
O sistema deve alertar sobre alterações não salvas. Caso o usuário confirme o descarte, os dados anteriores devem ser mantidos.

---

## CT-12 — Persistência das alterações

**Tipo:** Positivo

**Passos:**
1. Alterar mais de um campo com valores válidos.
2. Clicar em **Gravar**.
3. Fechar e abrir novamente o cadastro.

**Resultado esperado:**  
Todos os campos alterados devem apresentar os novos valores, sem perda, troca ou truncamento das informações.
