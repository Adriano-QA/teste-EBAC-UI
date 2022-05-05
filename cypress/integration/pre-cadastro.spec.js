/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade pré cadastro', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.internet.email(firstName);
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});