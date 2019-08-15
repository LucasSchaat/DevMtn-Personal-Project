describe('Step 2: Input / Import Data for Training', () => {
    const username = 'AutomatedTest'
    const password = '123LetsGo!'

    const outcomeDescription = 'Will this customer buy?'
    const firstOutcome = 'Yes'
    const secondOutcome = 'No'
    const firstVariable = 'Existing Customer'

    const trainingOutcome = 'Yes'
    const trainingFirstValue = 'Yes'

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

        cy.get('.save-variables-button')
        .click()

        cy.get('.import-data-button')
        .click()
    })

    afterEach( () => {
        cy.server()
        cy.route('DELETE', '/api/logout').as('Logout')
        
        cy.get('.logout-button')
        .click()

        cy.wait('@Logout', {timeout: 10000})
    })

    it('Input training data into input fields and save them to database', () => {
        cy.get('.outcome-training-input')
        .type(trainingOutcome)
        .should('have.value', trainingOutcome)

        cy.get('.first-category-training-input')
        .type(trainingFirstValue)
        .should('have.value', trainingFirstValue)
        
        cy.server()
        cy.route('POST', '/api/save_data').as('inputData')

        cy.get('.save-training-input-button')
        .should('exist')
        .click()

        cy.wait('@inputData', {timeout: 10000})

        cy.get('.outcome-training-display')
        .should('exist')

        cy.get('.first-training-value-display')
        .should('exist')
    })

    it('Edit button on click should change values to input fields', () => {
        cy.get('.outcome-training-input')
        .type(trainingOutcome)
        .should('have.value', trainingOutcome)

        cy.get('.first-category-training-input')
        .type(trainingFirstValue)
        .should('have.value', trainingFirstValue)
        
        cy.server()
        cy.route('POST', '/api/save_data').as('inputData')

        cy.get('.save-training-input-button')
        .should('exist')
        .click()

        cy.wait('@inputData', {timeout: 10000})

        cy.get('.edit-training-data-button')
        .should('exist')
        .click()

        cy.get('.edit-training-outcome-input')
        .should('exist')
        .should('have.value', trainingOutcome)

        cy.get('.edit-training-first-input')
        .should('exist')
        .should('have.value', trainingFirstValue)
    })

    it('Mass upload toggle works', () => {
        cy.get('.mass-training-import-button')
        .click()

        cy.get('.mass-training-save-button')
        .should('exist')

        cy.get('.import-training-method-toggle')
        .click()

        cy.get('.outcome-training-input')
        .should('exist')
    })
})