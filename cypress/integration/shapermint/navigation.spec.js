/// <reference types="cypress" />

describe("Shapermint navigation test", () => {
  it("Verifies if the links are directing correctly", () => {
    cy.visit("/");

    // Shapewear
    cy.get("[id=menu-main-navigation]").contains("Shapewear").click();
    cy.title().should("eq", "Shapewear for Women | Shapermint");
    cy.url().should("include", "/collections/shapewear");

    // Bras
    cy.get("[id=menu-main-navigation]").contains("Bras").click();
    cy.title().should("eq", "Bras - Shop the Best Bra Brands | Shapermint");
    cy.url().should("include", "/collections/bras");

    // Leggings
    cy.get("[id=menu-main-navigation]").contains("Leggings").click();
    cy.url().should("include", "/collections/leggings");

    // Tanks and Camis
    cy.get("[id=menu-main-navigation]").contains("Tanks & Camis").click();
    cy.title().should("eq", "Tanks and Camis | Shapermint");
    cy.url().should("include", "/collections/shapewear/tanks-and-camis");

    // Best Sellers
    cy.get("[id=menu-main-navigation]").contains("Best Sellers").click();
    cy.title().should("eq", "Best Sellers");
    cy.url().should("include", "/collections/best-sellers");

    // Spring Sale
    cy.get("[id=menu-main-navigation]").contains("Spring Sale").click();
    cy.title().should("eq", "Spring Sale 2021 - Shapermint");
    cy.url().should("include", "/collections/spring-sale");

    // Our Purpose
    cy.get("[id=menu-main-navigation]").contains("Our Purpose").click();
    cy.title().should("eq", "About Us | Shapermint");
    cy.url().should("include", "/pages/about-us");
  });
});
