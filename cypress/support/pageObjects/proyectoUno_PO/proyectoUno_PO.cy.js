class proyectoUno_PO {

    visitHome () {

        beforeEach( () => {
            cy.visit("https://demoqa.com/text-box")
            cy.title().should('eq', 'DEMOQA')
            cy.wait(1500)
        })
    }

    completarFormulario(nombre, correo, direccion1, direccion2) {

        cy.get("#userName").should('be.visible').type(nombre)
        cy.wait(2000)
        cy.get('#userEmail').should('be.visible').type(correo)
        cy.wait(2000)
        cy.get('#currentAddress').should('be.visible').type(direccion1)
        cy.wait(2000)
        cy.get('#permanentAddress').should('be.visible').type(direccion2)
        cy.wait(2000)
        cy.get('#submit').should('be.visible').click({force: true})
    }
}

//
export default proyectoUno_PO;