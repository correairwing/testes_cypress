/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    it('Deve renderizar pelo menos 3 contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato').should('have.length', 3)
    })

    it('Inserir um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.ckeKmo input:first-child').type('Irwing')
        cy.get('.ckeKmo input:nth-child(2)').type('teste@teste.com')
        cy.get('.ckeKmo input:nth-child(3)').type('91234567{enter}')
        cy.get('.contato').should('have.length', 4)
    })

    it('Deletar contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato:nth-child(5) .delete').click()
    })

    it('Editar contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato:nth-child(2) .edit').click()
        cy.get('input[value="gian Souza"]').clear().type('Alteração teste')
        cy.get('input[value="gian@ebac.com.br"]').clear().type('emailteste@teste.com')
        cy.get('input[value="11912345678"]').clear().type('999999999')
        cy.get('.alterar').click()
    })
})