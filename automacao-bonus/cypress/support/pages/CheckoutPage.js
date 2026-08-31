class CheckoutPage {
  preencherDadosDoCliente(nome, sobrenome, cep) {
    cy.get('[data-test="firstName"]')
      .should("be.visible")
      .type(nome);

    cy.get('[data-test="lastName"]')
      .type(sobrenome);

    cy.get('[data-test="postalCode"]')
      .type(cep);
  }

  continuar() {
    cy.get('[data-test="continue"]').click();
    cy.url().should("include", "/checkout-step-two.html");
  }

  validarProdutosNoResumo(produtos) {
    produtos.forEach((produto) => {
      cy.get('[data-test="inventory-item-name"]')
        .contains(produto)
        .should("be.visible");
    });
  }

  validarValoresDoPedido() {
    cy.get('[data-test="subtotal-label"]')
      .should("be.visible")
      .and("contain", "Item total:");

    cy.get('[data-test="tax-label"]')
      .should("be.visible")
      .and("contain", "Tax:");

    cy.get('[data-test="total-label"]')
      .should("be.visible")
      .and("contain", "Total:");
  }

  finalizarPedido() {
    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");
  }

  validarConfirmacao() {
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("have.text", "Thank you for your order!");

    cy.get('[data-test="complete-text"]')
      .should("be.visible")
      .and("contain", "Your order has been dispatched");

    cy.get('[data-test="back-to-products"]')
      .should("be.visible");
  }
}

export default new CheckoutPage();