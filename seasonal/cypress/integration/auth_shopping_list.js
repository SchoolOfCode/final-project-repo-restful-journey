const password = Cypress.env("password");

describe("The login page", () => {
  it("successfully loads", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
  });
});

describe(`Clicking "login" on the loginpage`, () => {
  it(" takes the user to the auth page", () => {
    cy.contains('Log In').click()
    // cy.get(
    //   '[class="chakra-button LoginButton_login__reQXg css-1w642ok"]'
    // ).click();

    cy.get('[class="input cdf74ce7b ce07c2f58"]')
      .type("nourishtest@protonmail.com")
      .should("have.value", "nourishtest@protonmail.com");

    cy.get('[class="input cdf74ce7b ccd26e912"]')
      .type(password)
      .should("have.value", password);
  });
});

describe("Entering username and password", () => {
  it(" takes the user to the home page, where they are greeted with their name", () => {
    cy.get(
      '[class="c063cb1a4 c295cd12c c1abb73c2 ca574d24e c469b7493"]'
    ).click();

    cy.url().should("include", "/home");

    cy.get(".Homepage_hellospring__doBV8").should("contain", "nourishtest");
  });
});

describe("Selecting desired ingredient", () => {
  it("takes the user to recipe page", () => {
    
    cy.get('[alt="Spinach"]').first().click({
      waitForAnimations: false,
      force: true,
    });
    cy.url().should("include", "/ingredients");
    

  });
});


describe("Using the hamburger menu and shopping list link", () => {
  it(" takes the user to the shopping list page", () => {
    cy.get('[class="sc-gsDKAQ jWelTo"]').click();

    cy.get('[href="/shoppinglist"]').click();

    cy.url().should("include", "/shoppinglist");
  });
});

describe("When the shopping list loads for the authorised test user", () => {
  it(" the list shows eggs, milk and bread", () => {
    cy.get('[class="ShoppingList_ingredient__tXHLw"]').should(
      "contain",
      "milk"
    );

    // cy.get('[data-testid="shopping-list"]').should("have.length", 2);
     cy.get('.ShoppingList_ingredient__tXHLw').should("have.length", 3);

  });
});
