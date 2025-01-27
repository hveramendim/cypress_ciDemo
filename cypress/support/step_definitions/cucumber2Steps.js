//import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario ingresa al formulario de la pagina DemoQA', () => {
  // Navegar a la página del formulario
  cy.visit('https://demoqa.com/text-box'); // Cambia la URL si es diferente
});

When('el usuario completa el formulario', () => {
  // Completar el formulario con datos de prueba
  cy.get('#userName').type('Juan Perez'); // Campo Nombre
  cy.get('#userEmail').type('juan.perez@example.com'); // Campo Correo
  cy.get('#currentAddress').type('Calle Falsa 123'); // Campo Dirección Actual
  cy.get('#permanentAddress').type('Av. Siempre Viva 456'); // Campo Dirección Permanente
});

Then('se deberia registrar la informacion enviada', () => {
  // Verificar que la información fue registrada correctamente
  cy.get('#submit').click({ force: true }); // Hacer clic en el botón Enviar

  // Validar que los datos ingresados están visibles en la salida
  cy.get('#output #name').should('contain.text', 'Juan Perez');
  cy.get('#output #email').should('contain.text', 'juan.perez@example.com');
  cy.get('#output #currentAddress').should('contain.text', 'Calle Falsa 123');
  cy.get('#output #permanentAddress').should('contain.text', 'Av. Siempre Viva 456');
});
