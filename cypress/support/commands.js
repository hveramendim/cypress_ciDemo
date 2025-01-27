// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-drag-drop";

require('@4tw/cypress-drag-drop')

/*
Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win.navigator, 'webdriver', {
      get: () => false,
    });
  });

*/
// -- This is a parent command -- GLOBALES
Cypress.Commands.add('textBox_visible', (selector, texto) => { 
  cy.get(selector).should('be.visible').type(texto)
  cy.wait(2000)
})

Cypress.Commands.add('textArea_visible', (selector, texto) => { 
  cy.get(selector).should('be.visible').type(texto)
  cy.wait(2000)
})

Cypress.Commands.add('boton_visible', (selector) => { 
  cy.get(selector).should('be.visible').click()
  cy.wait(2000)
})

// -- FUNCIONES POR CONJUNTO

//CREANDO LA FUNCION TOOLS QA

Cypress.Commands.add('formulario_txtBox', (nombre, correo, direccion1, direccion2) => { 
  
    cy.get("#userName").should('be.visible').type(nombre)
    cy.wait(2000)
    cy.get('#userEmail').should('be.visible').type(correo)
    cy.wait(2000)
    cy.get('#currentAddress').should('be.visible').type(direccion1)
    cy.wait(2000)
    cy.get('#permanentAddress').should('be.visible').type(direccion2)
    cy.wait(2000)
    cy.get('#submit').should('be.visible').click({force: true})
 })