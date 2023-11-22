
Cypress.Commands.add('login', () => {
    const { LOGIN, SENHA } = Cypress.env();

    cy.visit('http://localhost/NovaTseek/Tseek/login2.php');

    cy.get(':nth-child(1) > input').should('be.visible').clear().type(LOGIN);
    cy.get(':nth-child(2) > input').should('be.visible').clear().type(SENHA);
    cy.get(':nth-child(4) > input[type=submit]').should('not.be.disabled').click();
    
});
