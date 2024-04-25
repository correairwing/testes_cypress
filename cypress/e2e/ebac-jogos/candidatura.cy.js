/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuario até o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })

    it('Deve preencher o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('irwing correa')
        cy.get('input[name="email"]').type('irwing@teste.com')
        cy.get('input[name="telefone"]').type('92 912345678')
        cy.get('input[name="endereco"]').type('Rua 123')
        cy.get('select[name="escolaridade"').select('Outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()
        

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscrição-preenchido')
    })
})