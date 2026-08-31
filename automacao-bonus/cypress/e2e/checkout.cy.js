import LoginPage from "../support/pages/LoginPage";
import ProdutosPage from "../support/pages/ProdutosPage";
import CarrinhoPage from "../support/pages/CarrinhoPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Fluxo completo de compra no SauceDemo", () => {
  it("deve adicionar produtos e finalizar o pedido com sucesso", () => {
    cy.fixture("dados-teste").then((dados) => {
      const identificador = Date.now().toString().slice(-6);

      const cliente = {
        nome: `Guilherme${identificador}`,
        sobrenome: `Teste${identificador}`,
        cep: String(
          Math.floor(10000000 + Math.random() * 90000000)
        ),
      };

      cy.log("Realizando autenticação");

      LoginPage.acessar();
      LoginPage.realizarLogin(
        dados.usuario.nome,
        dados.usuario.senha
      );
      LoginPage.validarLoginRealizado();

      cy.log("Adicionando produtos ao carrinho");

      dados.produtos.forEach((produto) => {
        ProdutosPage.adicionarProduto(produto);
      });

      ProdutosPage.validarQuantidadeNoCarrinho(
        dados.produtos.length
      );
      ProdutosPage.abrirCarrinho();

      cy.log("Validando produtos no carrinho");

      CarrinhoPage.validarQuantidadeDeProdutos(
        dados.produtos.length
      );
      CarrinhoPage.validarQuantidadeDoItem(1);

      dados.produtos.forEach((produto) => {
        CarrinhoPage.validarProduto(produto);
      });

      CarrinhoPage.iniciarCompra();

      cy.log("Preenchendo os dados do cliente");

      CheckoutPage.preencherDadosDoCliente(
        cliente.nome,
        cliente.sobrenome,
        cliente.cep
      );

      CheckoutPage.continuar();

      cy.log("Validando o resumo da compra");

      CheckoutPage.validarProdutosNoResumo(
        dados.produtos
      );
      CheckoutPage.validarValoresDoPedido();

      cy.log("Finalizando o pedido");

      CheckoutPage.finalizarPedido();
      CheckoutPage.validarConfirmacao();
    });
  });
});