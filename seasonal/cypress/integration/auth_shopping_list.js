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
    cy.get(
      '[class="chakra-button LoginButton_login__reQXg css-1w642ok"]'
    ).click();

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

    cy.get(".Homepage_hellospring__XlrxQ").should("contain", "nourishtest");
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
    cy.get('[class="ShoppingList_ingredient__VV1Kg"]').should(
      "contain",
      "milk"
    );

    cy.get('[data-testid="shopping-list"]').should("have.length", 2);
  });
});
