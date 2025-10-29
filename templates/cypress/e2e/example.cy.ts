describe('Example E2E Test', () => {
  it('should visit the homepage', () => {
    cy.visit('/');
    {{#if isNextJS}}
    cy.contains('Next.js');
    {{/if}}
    {{#if isReact}}
    cy.contains('React');
    {{/if}}
    {{#if isVue}}
    cy.contains('Vue');
    {{/if}}
  });

  {{#if includeAuthTests}}
  it('should handle authentication flow', () => {
    cy.visit('/');
    
    // Example login test
    cy.login('test@example.com', 'password');
    
    // Verify authenticated state
    {{#if isNextJS}}
    cy.visit('/dashboard');
    cy.contains('Dashboard');
    {{/if}}
    
    // Logout
    cy.logout();
  });
  {{/if}}

  {{#if isExpress}}
  it('should test API endpoint', () => {
    cy.apiRequest('GET', '/api/health')
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
  {{/if}}
});

