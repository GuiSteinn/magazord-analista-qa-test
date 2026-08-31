class LoginPage {
  acessar() {
    cy.visit("/");
  }

  preencherUsuario(usuario) {
    cy.get('[data-test="username"]')
      .clear()
      .type(usuario);
  }

  preencherSenha(senha) {
    cy.get('[data-test="password"]')
      .clear()
      .type(senha, { log: false });
  }

  clicarEmEntrar() {
    cy.get('[data-test="login-button"]').click();
  }

  realizarLogin(usuario, senha) {
    this.preencherUsuario(usuario);
    this.preencherSenha(senha);
    this.clicarEmEntrar();
  }

  validarLoginRealizado() {
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("contain", "Products");
  }
}

export default new LoginPage();