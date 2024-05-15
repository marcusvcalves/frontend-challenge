describe('User login', () => {
  it('should log in with valid credentials', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input[name="email"]').type('cliente@youdrive.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/user-page');
    cy.contains('Your Name').should('exist');
    cy.contains('Your E-mail').should('exist');
    cy.contains('Logout').should('exist');
  });
})