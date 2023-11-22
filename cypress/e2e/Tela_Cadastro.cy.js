describe('Teste Tela de Cadastro', () => {
    it.only('Deve ter o teste da Tela de Cadastro', () => {

        cy.visit('http://localhost/tseek00/Tseek/login2.php');

        cy.get(':nth-child(3) > a:nth-child(2)',{timeout: 10000 }).should('be.visible').click();

        cy.fixture("cadastro.json").then(dadosCadstro=> {
            cy.get(':nth-child(1) > input[type=text]').should('be.visible').clear().type(dadosCadstro.USERNAME,{dalay:100});
            cy.get(':nth-child(2) > input[type=text]').should('be.visible').clear().type(dadosCadstro.NOME,{dalay:100});
            cy.get(':nth-child(3) > input[type=email]').should('be.visible').clear().type(dadosCadstro.EMAIL,{dalay:100});
            cy.get(':nth-child(4) > input[type=password] ').should('be.visible').clear().type(dadosCadstro.SENHA,{dalay:100});

            cy.get(':nth-child(6) > input[type=submit]').should('be.visible').click();
            cy.log('Teste encerrado')
        });
    });
});