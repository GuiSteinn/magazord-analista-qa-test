class CarrinhoPage {
  validarQuantidadeDeProdutos(quantidade) {
    cy.get('[data-test="inventory-item"]')
      .should("have.length", quantidade);
  }

  validarProduto(nomeProduto) {
    cy.get('[data-test="inventory-item-name"]')
      .contains(nomeProduto)
      .should("be.visible");
  }

  validarQuantidadeDoItem(quantidade) {
    cy.get('[data-test="item-quantity"]')
      .each((elemento) => {
        cy.wrap(elemento).should("have.text", quantidade.toString());
      });
  }

  iniciarCompra() {
    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");
  }
}

export default new CarrinhoPage();