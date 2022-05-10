/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json');

context('Funcionalide Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/');
    });

    after(() => {
        cy.screenshot();
    });
    
    

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('contain', 'Minha conta');
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario);
        cy.get('#password').type(perfil.senha);
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('contain', 'Minha conta');
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario);
            cy.get('#password').type(dados.senha, {log: false});
            cy.get('.woocommerce-form > .button').click();
            cy.get('.page-title').should('contain', 'Minha conta');
        });

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de ');
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida');
    })
})