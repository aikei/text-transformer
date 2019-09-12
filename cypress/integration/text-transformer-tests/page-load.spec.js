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

    it("2. When the page loads, the user should see the __input__ panel containing the following elements: a dropdown for encoding selection, and a text area.", () => {
        cy.get(".trs-input-panel .trs-encoding-dropdown").should("be.visible");
        cy.get(".trs-input-panel .trs-text-area").should("be.visible");
    });

    it("3. When the page loads, the user should see the __transforms__ panel containing one empty transform element (see below), and a plus button to the right of it.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element").should("have.length", 1);
        cy.get(`.trs-transforms-panel .trs-transforms-element .trs-transform-selection-dropdown option[value='none']`)
            .should("be.visible");
        cy.get(`.trs-transforms-panel .trs-add-transform-button`).should("be.visible");
    });

    it("4. When the page loads, the user should see the __output__ panel containing the following elements: a dropdown for encoding selection, and a text area with text input disabled.", () => {
        cy.get(".trs-output-panel .trs-encoding-dropdown").should("be.visible");
        cy.get(".trs-output-panel .trs-text-area").should("be.visible");        
    });

    it("5. There should be three options in the encoding dropdown: `Text`, `Hex` and `Base64`", () => {
        cy.get(".trs-input-panel .trs-encoding-dropdown option[value='utf8']").should("exist");
        cy.get(".trs-input-panel .trs-encoding-dropdown option[value='base64']").should("exist");
        cy.get(".trs-input-panel .trs-encoding-dropdown option[value='hex']").should("exist");
    });

    it("8. When the user clicks the plus button in the __transforms__ panel, an Empty Transform Element should appear in its place, and the plus button should move to the right.", () => {
        cy.get(`.trs-transforms-panel .trs-add-transform-button`).click();
        cy.get(".trs-transforms-panel .trs-transforms-element").should("have.length", 2);
    });

    it("9. When the user clicks the cross button at the top right of any of the __transforms__ panel elements, that element should be removed and the plus button should move to the left.", () => {
        cy.get(`.trs-transforms-panel .trs-add-transform-button`).click();
        cy.get(".trs-transforms-panel .trs-transforms-element").should("have.length", 2);
        cy.get(".trs-transforms-panel .trs-transforms-element").eq(1).find(".trs-remove-element-transform-button").click();
        cy.get(".trs-transforms-panel .trs-transforms-element").should("have.length", 1);
    });

});