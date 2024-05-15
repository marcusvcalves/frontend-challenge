describe('Login Page', () => {
  it('should load login page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Sign In');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });
});
