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
    
    it("7. Given that the __input__ panel encoding dropdown is open, when the user clicks any option other than the current one, and if there was some txt already in the __input__ text area, the user should see the text in the __output__ text area change.", () => {
        cy.get(".trs-output-panel .trs-text-area").invoke("val", (originalOutput => {
            cy.get(".trs-input-panel .trs-encoding-dropdown select").select("base64");
            cy.get(".trs-output-panel .trs-text-area").invoke("val").should("not.equal", originalOutput);
        }));
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

    it("10. When any __transforms__ panel element is created, the users should see a _transformation selection dropdown_ on top showing which transformation this element represents.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-transform-selection-dropdown").should("be.visible");
    });

    it("11. When the user clicks the _transformation selection dropdown_, they should see the following options: `AES`, `None`", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-transform-selection-dropdown option[value='none']")
            .should("exist");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-transform-selection-dropdown option[value='aes-encrypt']")
            .should("exist");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-transform-selection-dropdown option[value='aes-decrypt']")
            .should("exist");
    });

    it("12. When an empty element is created, it should have `None` value in the _transformation selection dropdown_", () => {
        cy.get(`.trs-transforms-panel .trs-add-transform-button`).click();
        cy.get(".trs-transforms-panel .trs-transforms-element").eq(1).find("select")
            .should("have.value", "none");
    });

    it("13. Given that the _transformation selection dropdown_ is open and the current element is not the `AES Encrypt` transform element, when the user clicks the `AES Encrypt` option in the dropdown, all old element's field not present in the `AES Encrypt` element should disappear and the element should become the `AES Encrypt` transform element.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input")
            .should("exist");
    });

    it("13.1. Given that the _transformation selection dropdown_ is open and the current element is not the `AES Decrypt` transform element, when the user clicks the `AES Decrypt` option in the dropdown, all old element's field not present in the `AES Decrypt` element should disappear and the element should become the `AES Decrypt` transform element.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-decrypt");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input")
            .should("be.visible");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input")
            .should("exist");
        cy.get(".trs-error-message").should("be.visible");
    });

    it("16. When the user clicks the bit selection dropdown in the `AES` transform element, the user should options `128`, `192` and `256`", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input option[value='128']")
            .should("exist");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input option[value='192']")
            .should("exist");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input option[value='256']")
            .should("exist"); 
    });

    it("18. When the user clicks the block mode selection dropdown in the `AES` transform element, the user should see options `ecb` and `cbc`", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input option[value='ecb']")
            .should("exist");
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input option[value='cbc']")
            .should("exist");
    });

    it("26. When the page loads, user should see the same text in the output text area as in the input text area", () => {
        cy.get(".trs-input-panel .trs-text-area").should("have.text", "Lorem ipsum dolor sit amet");
        cy.get(".trs-output-panel .trs-text-area").should("have.text", "Lorem ipsum dolor sit amet");
    });

    it("19. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see key input with a random key in base64 format", () => {        
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get("#trs-aes-options-key").should("not.have.value", "");
    });

    it("20. When an element is selected to be an AES transform element in the _transformation selection dropdown_, the user should see iv input with a random value in base64 format", () => {        
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get("#trs-aes-options-iv").should("not.have.value", "");
    });

    it("21. When the user changes text in the __input__ text area, the user should immediately see the result of transforming this text using the transforms from the __transforms panel__", () => {
        cy.get(".trs-input-panel .trs-text-area").type(", consectetur adipiscing elit");
        cy.get(".trs-output-panel .trs-text-area").should("have.text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    });

    it("22. When the user clicks the encoding selection dropdown in the __output__ area, resulting text should be transformed into the given encoding", () => {
        
        cy.get(".trs-output-panel .trs-text-area").invoke("val").then(originalText => {
            cy.get(".trs-output-panel .trs-encoding-dropdown select")
                .select("base64")
            cy.get(".trs-output-panel .trs-text-area").invoke("val").then(text2 => {
                expect(originalText).not.to.equal(text2);
                cy.get(".trs-output-panel .trs-encoding-dropdown select")
                    .select("hex");
                cy.get(".trs-output-panel .trs-text-area").invoke("val").should("not.equal", text2);
            });
        });
    });

    it("23. When the user removes any transform element from the __transforms__ panel, the text in the __output__ panel text area should change too, reflecting the change in text transformation.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get(".trs-add-transform-button")
            .click();
        cy.get(".trs-transforms-panel .trs-transforms-element")
            .eq(1)
            .find("select")
            .select("aes-encrypt");

        cy.get(".trs-output-panel .trs-text-area").invoke("val").then(originalText => {
            cy.get(".trs-transforms-panel .trs-transforms-element")
                .eq(1)
                .find(".trs-remove-element-transform-button")
                .click();
            cy.get(".trs-output-panel .trs-text-area").invoke("val").should("not.equal", originalText);
        });
    });

    it("24. When the user sets first transform element to AES Encrypt and then adds another transform element to the __transforms__ panel and then sets it to AES Decrypt and enters same options, the text in the __output__ panel text area should be equal to the text in the input area.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        cy.get(".trs-output-panel .trs-text-area").invoke("val").then(text => {
            const oldOutput = text;

            cy.get(".trs-add-transform-button")
                .click();

            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input input").invoke("val").then(text => {
                const key = text;
                cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input").invoke("val").then(text => {
                    const iv = text;
                    cy.get(".trs-transforms-element").its("length").should("equal", 2);
        
                    cy.get(".trs-transforms-element").eq(1).find("select")
                        .select("aes-decrypt");
                    
                    cy.get(".trs-transforms-panel .trs-transforms-element").eq(1)
                        .find(".trs-aes-encrypt-key-input input")
                        .type(key);
                    
                    cy.get(".trs-transforms-panel .trs-transforms-element").eq(1)
                        .find(".trs-aes-encrypt-iv-input input")
                        .type(iv);
                    
                    cy.get(".trs-output-panel .trs-text-area").invoke("val").should("not.have.value", oldOutput);
                });
            });

        });

    });

    it("25. When the user changes any options, such as key in the `AES-encrypt` transform element, the text in the __output__ panel text area should change too, reflecting the change in text transformation", async () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        const newKey = await new Promise((resolve) => {
            cy.task("getRandomBytes", 16).then(result => {
                resolve(result);
            })
        });

        const oldOutput = await new Promise((resolve) => {
            cy.get(".trs-output-panel .trs-text-area").invoke("val").then(text => {
                resolve(text);
            });
        });

        cy.get("#trs-aes-options-key")
            .clear()
            .type(newKey);

        cy.get(".trs-output-panel .trs-text-area").should("not.have.value", oldOutput);
    });

    it("27. Given that the `AES encrypt` option is selected in a dropdown, when the user changes the value of bits from 128 to any other value, a new random key should automatically be generated.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        
        let oldKey = "";

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input input")
            .invoke("val").then((key) => {
                oldKey = key;
                cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input select")
                    .select("256");
            
                cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input input")
                    .should("not.have.value", oldKey);
            });
    });

    it("28. When the last transform element is selected to be an `AES Encrypt` transform element, the user should see output panel encoding dropdown show `Base64` value.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
        cy.get(".trs-output-panel .trs-encoding-dropdown select").should("have.value", "base64");
    });

    it("28.1. When the user changes a transform element to be `AES Decrypt` element, the text in the 'output' panel text area should change to the decrypted text, provided key, iv, mode, key length, and input are all correct", async () => {
        
        const plainText = "Hello";
        
        cy.get(".trs-transforms-panel .trs-transforms-element #trs-transform-dropdown-select")
            .select("aes-encrypt");

        cy.get(".trs-transforms-panel .trs-transforms-element #trs-transform-dropdown-select")
            .select("aes-decrypt");

        const key = await new Promise((resolve) => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input input").invoke("val").then(text => {
                resolve(text);
            })
        });

        const iv = await new Promise((resolve) => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input").invoke("val").then(text => {
                resolve(text);
            });
        });

        const mode = await new Promise((resolve) => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input select").invoke("val").then(text => {
                resolve(text);
            });
        });

        const keyLength = await new Promise((resolve => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input select").invoke("val").then(text => {
                resolve(text);
            });
        }));

        const cipherText = await new Promise((resolve) => {
            cy.task("aesEncrypt", {
                plainText,
                key,
                keyLength,
                iv,
                mode
            }).then(result => {
                console.log("aesEncrypt result:", result)
                resolve(result);
            });
        });

        cy.get("#trs-input-dropdown-select").select("base64");

        cy.get(".trs-input-panel textarea")
            .clear()
            .type(cipherText);

        cy.get(".trs-output-panel textarea").invoke("val").should("be.equal", plainText);
    });

    it("29. When the user changes a transform element to be `AES Encrypt` element, the text in the __output__ panel text area should change to the decrypted text, provided key, iv, mode, key length, and input are all correct", async () => {

        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");
            
        console.log("changed to aes-encrypt");

        cy.get(".trs-aes-encrypt-key-input input").should("exist");

        cy.get(".trs-aes-encrypt-key-input input").invoke("val").then(key => {
            cy.get(".trs-aes-encrypt-iv-input input").should("exist");
            cy.get(".trs-aes-encrypt-iv-input input").invoke("val").then(iv => {
                cy.get(".trs-input-panel textarea").should("exist");
        
                cy.get(".trs-input-panel textarea").invoke("val").then(plainText => {

                    console.log("plainText:", plainText);
        
                    cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input select").invoke("val").then(mode => {
                        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-bits-input select").invoke("val").then(keyLength => {
                            console.log("keyLength:", keyLength);
                
                            cy.task("aesEncrypt", {
                                plainText,
                                key,
                                keyLength,
                                iv,
                                mode
                            }).then(cipherText => {
                                console.log("cipherText:", cipherText);
                                cy.get(".trs-output-panel textarea").invoke("val").should("be.equal", cipherText);
                            });
                        });
                    });
                });
            });
        });
    });

    it("30. When the user changes AES encryption mode from 'ecb' to 'cbc', a new random IV should be seen in the IV input.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.have.value", "");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.be.disabled");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input select")
            .select("ecb");
        
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("have.value", "");
        
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("be.disabled");
        
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input select")
            .select("cbc");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.have.value", "");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.be.disabled");
    });

    it("31. When the user changes AES encryption mode to 'ecb' from 'cbc', the value should be removed from the IV input and INV input should become disabled.", () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.have.value", "");

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("not.be.disabled")

        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-variation-input select")
            .select("ecb");
        
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("have.value", "");
        
        cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input")
            .should("be.disabled");
    });

    it("32. When the user selects `AES Decrypt` as the type of the last transform element, encoding dropdown value of the output panel should change to 'Text'", async () => {
        cy.get(".trs-transforms-panel .trs-transforms-element select")
            .select("aes-encrypt");

        const key = await new Promise((resolve) => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-key-input input").invoke("val").then(text => {
                resolve(text);
            })
        });

        const iv = await new Promise((resolve) => {
            cy.get(".trs-transforms-panel .trs-transforms-element .trs-aes-encrypt-iv-input input").invoke("val").then(text => {
                resolve(text);
            });
        });    

        cy.get(`.trs-transforms-panel .trs-add-transform-button`).click();
        cy.get(".trs-transforms-element").its("length").should("equal", 2);

        cy.get(".trs-transforms-element").eq(1).find("select")
            .select("aes-decrypt");
        
        cy.get(".trs-transforms-panel .trs-transforms-element").eq(1)
            .find(".trs-aes-encrypt-key-input input")
            .type(key, { force: true });
        
        cy.get(".trs-transforms-panel .trs-transforms-element").eq(1)
            .find(".trs-aes-encrypt-iv-input input")
            .type(iv, { force: true });

        cy.get(".trs-output-panel .trs-encoding-dropdown select").should("have.value", "utf8");
    });
});