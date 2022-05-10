/// <reference types="cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Adriano', 'Teste', 'EBAC', 'Brasil', 'Avenida Brasil', 2022, 'São Carlos', 'São Paulo', 13530000, 9999999999, 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});