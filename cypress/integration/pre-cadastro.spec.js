/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade pré cadastro', () => {

    before(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let first_Name = faker.name.firstName();
        let last_Name = faker.name.lastName();
        let emailFaker = faker.internet.email(first_Name);

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(first_Name)
        cy.get('#account_last_name').type(last_Name)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar o pré cadastro usando CUSTOM COMMANDS', () => {
        let first_Name = faker.name.firstName();
        let emailFaker2 = faker.internet.email(first_Name);
        cy.preCadastro(emailFaker2, 'senha@forte', 'Adriano', 'Teste')

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
        
    
});