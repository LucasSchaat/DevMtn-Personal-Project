describe('Step 1: Create Outcome and Variables Tests', () => {
    const username = 'AutomatedTest'
    const password = '123LetsGo!'
    
    const outcomeDescription = 'Will this customer buy?'
    const firstOutcome = 'Yes'
    const secondOutcome = 'No'
    const firstVariable = 'Existing Customer'
    const secondVariable = 'Last Contact'
    const thirdVariable = 'Last Activity'
    const fourthVariable = 'Spoken with Sales'
    const fifthVariable = 'Part of Larger Organization'
    const sixthVariable = 'Inbound'
    
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('.login-button')
        .click()
        
        cy.get('.login-username')
        .type(username)

        cy.get('.login-password')
        .type(password)

        cy.server()
        cy.route('POST', '/api/login').as('Login')
        
        cy.get('.submit-login-button')
        .click()

        cy.wait('@Login', {timeout: 10000})

        cy.get('.create-variables-button')
        .click()
    })

    afterEach( () => {
        cy.server()
        cy.route('DELETE', '/api/logout').as('Logout')
        
        cy.get('.logout-button')
        .click()

        cy.wait('@Logout', {timeout: 10000})
    })

    it('Inputs for outcomes and model variables exist and save', () => {
        cy.get('.add-variable-button')
        .should('exist')
        .click()
        .click()
        .click()
        .click()
        .click()
        
        cy.get('.outcome-description-input')
        .type(outcomeDescription)
        .should('have.value', outcomeDescription)

        cy.get('.first-outcome-input')
        .type(firstOutcome)
        .should('have.value', firstOutcome)

        cy.get('.second-outcome-input')
        .type(secondOutcome)
        .should('have.value', secondOutcome)
        
        cy.get('.first-variable-input')
        .type(firstVariable)
        .should('have.value', firstVariable)

        cy.get('.second-variable-input')
        .type(secondVariable)
        .should('have.value', secondVariable)

        cy.get('.third-variable-input')
        .type(thirdVariable)
        .should('have.value', thirdVariable)

        cy.get('.fourth-variable-input')
        .type(fourthVariable)
        .should('have.value', fourthVariable)

        cy.get('.fifth-variable-input')
        .type(fifthVariable)
        .should('have.value', fifthVariable)

        cy.get('.sixth-variable-input')
        .type(sixthVariable)
        .should('have.value', sixthVariable)

        cy.get('.save-variables-button')
        .click()

        cy.get('.edit-variables-button')
        .should('exist')

        cy.get('.delete-variable-button')
        .should('exist')
    })

    it('Delete button should work after variable was added', () => {
        cy.get('.add-variable-button')
        .click()

        cy.get('.delete-variable-button')
        .should('exist')
        .click()
    })

    it('Import your data button works', () => {
        cy.get('.import-data-button')
        .should('exist')
        .click()

        cy.get('.upload-title')
        .should('exist')
    })
})