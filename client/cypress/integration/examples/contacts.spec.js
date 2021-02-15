/// <reference types="cypress" />

context('ContactList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  })

  it('After page loads, 20 grid items should exist', () => {
    const expectedCount = 20;
    cy.get('.MuiGrid-item').should('have.length', expectedCount);
  });

  it('LoadMore button should be visible', () => {
    cy.get('.makeStyles-footer-2').scrollIntoView({ duration: 2000 });
    cy.get('.MuiButton-root').should('be.visible');      
  });

  it('Click LoadMore button, Should load 20 more grid items', () => {
    const expectedCount = 40;
    cy.get('.makeStyles-footer-2').scrollIntoView({ duration: 2000 });
    cy.get('.MuiButton-root').click();
    cy.get('.MuiGrid-item').should('have.length', expectedCount);
    cy.get('.makeStyles-footer-2').scrollIntoView({ duration: 2000 });
  });
});
