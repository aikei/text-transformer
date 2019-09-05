/// <reference types="Cypress" />

context("Page Load", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    it("1. When the page loads, the user should see three panels: 'input', 'transforms' and 'output'.", () => {
        cy.get(".trs-input-panel").should("be.visible");
        cy.get(".trs-transforms-panel").should("be.visible");
        cy.get(".trs-output-panel").should("be.visible");
    });

});