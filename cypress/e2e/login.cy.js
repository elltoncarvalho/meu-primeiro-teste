describe('login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('entra com usuário e senha', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
        
  })
  })