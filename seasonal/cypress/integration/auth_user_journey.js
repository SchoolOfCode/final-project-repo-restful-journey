// describe('user auth journey', function(){
//     it('user can login, select recipe, ingredient and see it in the shoppinglist', function(){
//         cy.visit('http://localhost:3000/')
//         cy.contains('Log Out').click()
//         cy.visit('http://localhost:3000/')
//         cy.contains('Log In').click()

//         cy.url()
//         .should('include', 'https://dev-k8q9z7mt.us.auth0.com/u/login')
        
//         cy.get('#username')
//             .type('newemail@hotmail.com')
//             .should('have.value', 'newemail@hotmail.com')
//         cy.get('#password')
//             .type('Room29!!29')
//             .should('have.value', 'Room29!!29')
//         cy.contains('Continue').click()

//         cy.url()
//         .should('include', '/home')
//         cy.contains('Hello newemail')
//         cy.get('[alt="Carrot"]').first().click()

//         cy.url()
//         .should('include', '/ingredients')
//         cy.get('.IngredientPage_recipeImage__JbRzP').first().click()

//          cy.url()
//         .should('include', '/recipes')
//         cy.wait(1000).get('button').last().click()
//         cy.get('.RecipePage_link__KxRjq').click()

//          cy.url()
//         .should('include', '/shoppinglist')

//     })
// })

// describe('first test', function(){
//     it('visits the login page', function(){
//         cy.visit('http://localhost:3000/home')
//         cy.get('[alt="Carrot"]').first().click()
//         cy.get('.IngredientPage_recipeImage__JbRzP').first().click()
//         cy.wait(1000).get('button').last().click()
//         cy.get('.RecipePage_link__KxRjq').click()
//     })
// })