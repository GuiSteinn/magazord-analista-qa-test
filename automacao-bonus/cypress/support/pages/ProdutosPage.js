class ProdutosPage {
  adicionarProduto(nomeProduto) {
    cy.contains('[data-test="inventory-item"]', nomeProduto)
      .should("be.visible")
      .within(() => {
        cy.contains("button", "Add to cart").click();
      });
  }

  validarQuantidadeNoCarrinho(quantidade) {
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", quantidade.toString());
  }

  abrirCarrinho() {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
  }
}

export default new ProdutosPage();