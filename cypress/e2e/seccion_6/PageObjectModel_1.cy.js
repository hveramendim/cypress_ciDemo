///<reference types="cypress" /> 

import proyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy'

describe("Page Object Moodel", ()=> {

    const proj1 = new proyectoUno_PO();

    proj1.visitHome()

    afterEach( () =>   {
        cy.wait(2000)
    })

    it("TEST FORM UNO", () => {
       proj1.completarFormulario('Harry', 'harry@gmail.com', 'JUANITO PEREZ N', 'LIFT YOUR SKINNY FIST LIKE ANTENNAS TO HEAVEN')
    })


    })
