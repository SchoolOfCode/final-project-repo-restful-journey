describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/home");
  });
});

describe(`Clicking "Spinach" on the homepage`, () => {
  it(" takes the user to the ingredients page, with Spinach recipes", () => {
    cy.visit("/home");

    cy.get('[alt="Spinach"]').first().click({
      waitForAnimations: false,
      force: true,
    });

    cy.url().should("include", "/ingredients");
  });
});

describe("Clicking the discover link", () => {
  it(" takes the user to the search page, prepopulating the placeholder with Spinach", () => {
    cy.get('[class="discover"]').click();

    cy.url().should("include", "/search");

    cy.get(".css-w3szeq")
      .invoke("attr", "placeholder")
      .should("contain", "Spinach");
  });
});

describe("Clicking the first recipe on the search page", () => {
  it(" takes the user to the recipe page, rendering information about that recipe", () => {
    cy.get('[alt="Spinach Coriander Chive Bread"]').click();

    cy.url().should("include", "/recipe");

    cy.get("li").should("contain", "100 grams - all purpose flour");

    cy.get("li").should(
      "contain",
      "Preheat the oven to 200 degree C and grease a baking tray."
    );
  });
});

describe("Clicking the go to your shopping list link when unauthorised", () => {
  it(" takes the user to the shopping list, but nothing is in there.", () => {
    cy.get('[class="RecipePage_link__s-FkR"]').click();

    cy.url().should("include", "/shoppinglist");

    cy.get('[data-testid="shopping-list"]').should("have.length", 1);
  });
});
