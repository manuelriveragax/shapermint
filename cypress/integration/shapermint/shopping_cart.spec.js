/// <reference types="cypress" />

describe("Shopping Cart Test ", () => {
  it("Navigates to a random section of the store and adds a random item to the shopping cart, then verifies the total", () => {
    // Visits the home page
    cy.visit("/");

    // Selects a random nav item and clicks it
    cy.get("[id=menu-main-navigation]").any().click();

    // Selects a random product and clicks it
    cy.get(".product-element-top").any().click();

    // Adds the random product to the cart
    cy.get("#shopify_add_to_cart").click();

    // Saves the product price in $itemPrice
    cy.get("[id=product-price]").then(($item) => {
      const itemPrice = $item.text();

      // Verifies the cart sidebar is visible
      cy.get("[id=cart-sidebar]").should("be.visible");

      // Compares the $itemPrice of the random product with the cart total
      cy.get(".order-total__total-price").should(($total) => {
        expect($total).to.contain(itemPrice);
      });
    });
  });
});
