<div align='center'>

![Magazord](LogoMagazord.png)

</div>

# Teste para vaga de Analista de QA (Testes) 

Este repositório tem como fim testar os candidatos para vaga de analista de qualidade focado em testes e automação na empresa [Magazord](https://magazord.com.br).

O objetivo deste teste é avaliar sua capacidade de analisar requisitos, criar cenários de testes relevantes, investigar problemas (troubleshooting) e comunicar de forma clara os resultados.

---

## 1º Cenário: Testes de Integração (Marketplace e ERP)

Você faz parte da equipe responsável por testar uma nova integração entre o Magazord e um marketplace externo (como Mercado Livre ou Amazon) e também com um ERP de gestão de estoque (como o Bling). A integração envolve a sincronização das seguintes informações:
- Cadastro e atualização de Preços e Anúncios.
- Sincronização de Estoque.
- Descida de Pedidos e Faturamento.

**Sua tarefa:**
Sem a necessidade de criar um plano de testes extenso, liste de forma objetiva **quais casos de teste principais** você executaria para garantir que essa comunicação entre os sistemas está funcionando corretamente. 

1. Descreva ao menos 3 cenários de sucesso (Caminho Feliz) e 3 cenários de exceção/falha que você testaria.
2. Como você priorizaria a execução desses testes, considerando o impacto no negócio do cliente?

---

## 2º Cenário: Investigação de Problemas (Troubleshooting)

O cliente entrou em contato devido a uma questão relacionada aos seus anúncios em um marketplace. A regra de negócio padrão diz que: *Quando os itens ficam sem estoque no Magazord (estoque = 0), a integração deve enviar um comando para o marketplace e o anúncio deve assumir o status de "Pausado (sem estoque)".*

**O Problema:**
Os anúncios do cliente estão ficando apenas com o status "Pausado" no marketplace. Isso faz com que os anúncios permaneçam visíveis e disponíveis para venda, resultando em pedidos de itens que não existem no estoque real. O cliente precisa cancelar essas vendas, o que prejudica severamente sua reputação.

- O cliente possui 38 anúncios nesta situação e relata que não os pausou manualmente.
- Quando a equipe aciona uma *atualização manual* de estoque pelo sistema, o anúncio atualiza corretamente para "Pausado sem estoque".
- Ao verificar os logs automáticos dos anúncios, não foram encontrados registros de envio de "estoque = zero" no momento em que o produto esgotou no Magazord.

![anúncios pausado no magazord e sem estoque](aa.png)

**Sua tarefa:**
Considerando que você não tem acesso ao painel do cliente no marketplace, descreva qual seria o seu **passo a passo de investigação** para esse problema. Quais são as suas principais **hipóteses** do que pode estar causando essa falha na automação?

---

## 3º Cenário: Validação de Interface e Regras de Negócio

Você está encarregado de validar as alterações cadastrais de um cliente no sistema. A tela possui campos sensíveis e importantes para o faturamento e contato.

![Alterar pessoa](AlterarPessoa.png)

**Sua tarefa:**
Crie os **casos de teste manuais** (positivos e negativos) que você executaria para validar os campos dessa tela. Considere validações de formato (ex: CPF, E-mail, Telefone), limites de caracteres, campos obrigatórios e comportamentos esperados ao inserir dados inválidos.

*Formato sugerido para a resposta:* Título do Teste, Pré-condições, Passos para Execução e Resultado Esperado.

---

## 4º Cenário: Criação de Casos de Teste (Prática Web)

Queremos ver como você estrutura seus testes em uma aplicação real. Utilize o site de demonstração [SauceDemo](https://www.saucedemo.com) para este cenário.

**Credenciais de acesso:**
- **Username:** standard_user
- **Password:** secret_sauce

**Sua tarefa:**
Navegue pela aplicação e escreva os casos de teste manuais que cubram o **Fluxo Principal de Compra** (Login -> Adicionar produtos ao carrinho -> Checkout -> Finalizar pedido). 

Seja claro e estruturado. Queremos avaliar como você documenta um teste para que outro analista consiga reproduzi-lo sem dificuldades.

---

## 🌟 Bônus / Diferencial: Automação de Testes E2E (Opcional)

Sabemos que testes manuais são o foco principal, mas conhecimentos em automação são um grande diferencial! Se você possui experiência com automação (Cypress, Playwright, Selenium, Robot Framework, etc.), sinta-se à vontade para resolver este desafio. Você pode escolher a linguagem e o framework de sua preferência.

### Contexto (Perguntas Teóricas)
Em um fluxo de e-commerce real que envolve adição ao carrinho, aplicação de cupom único, pagamento e confirmação:
- **2.1.a)** Como você garantiria que cada execução do seu teste automatizado utilize um cupom válido e diferente?
- **2.1.b)** Como você validaria a tela de confirmação de pedido gerado sem depender do recebimento de um e-mail real?

### Teste Prático (SauceDemo)
Utilizando o mesmo site do Cenário 4 (`https://www.saucedemo.com` com o usuário `standard_user`), automatize o seguinte escopo:

1. **Implemente o fluxo completo de checkout** (Login -> Adicionar produtos -> Checkout -> Finalizar).
2. **Geração dinâmica de dados** para cada execução nos campos do checkout (Nome, Sobrenome, CEP).
3. **Validação final** da confirmação do pedido.
4. **Limpeza e boas práticas** (Limpar cookies/localStorage após ou antes dos testes).
5. **Padrão de Projeto:** Utilize Page Objects e Fixtures/Mocks para organização do código (se aplicável ao framework escolhido).

*Crie uma pasta chamada `automacao-bonus` no seu repositório para colocar o código deste desafio.*

---

## Avaliação

> [!IMPORTANT]
> **Os candidatos serão avaliados com base na clareza, precisão e detalhamento das respostas teóricas e práticas.**

> [!IMPORTANT]
> **A capacidade de compreender regras de negócio, investigar falhas (troubleshooting) e comunicar problemas é fundamental.**

> [!IMPORTANT]
> **A organização, formatação e a estrutura das respostas no repositório também serão consideradas na avaliação.**

## Envio do teste

> [!NOTE]
> **Suba este projeto/respostas no seu Github pessoal de forma pública e envie o link diretamente para o seu recrutador.**

> [!WARNING]
> **Não serão aceitas alterações após o envio. Caso precise de mais tempo para a conclusão, alinhe com o seu recrutador com antecedência.**
