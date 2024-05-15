describe('Authentication expected', () => {
  it('should redirect to login page if not authenticated', () => {
    cy.visit('http://localhost:5173/user-page');
    cy.url().should('include', '/');
    cy.contains('Sign In').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  });
});
