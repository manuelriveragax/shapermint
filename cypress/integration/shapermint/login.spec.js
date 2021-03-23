/// <reference types="cypress" />

describe("Login Page Test", () => {
  it("Verify if a user will be able to login with valid credentials", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    const customerName = Cypress.env("customerName");

    // Visits the home page
    cy.visit("/");

    // Locates the Account button and clicks it
    cy.get(".account-icon-button").click();

    // Verifies the page title and url
    cy.title().should("eq", "Account");
    cy.url().should("include", "/account/login");

    // Locates the username and password credentials, then types in the values from the env
    cy.get("[id=username]").type(username);
    cy.get("[id=CustomerPassword]").type(password);

    // Locates the Login button and clicks it
    cy.get("[type=submit]").contains("Login").click();

    // Verifies the page title and url
    cy.title().should("eq", "Account");
    cy.url().should("include", "/account");

    // Verifies the user greeting message is visible and contains the customer name
    cy.get(".hello").should("be.visible").should("contain", customerName);
  });
});
