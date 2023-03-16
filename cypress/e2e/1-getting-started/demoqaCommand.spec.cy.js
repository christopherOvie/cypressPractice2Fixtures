//es6 function
//

describe('demoqa test', () => {
  
  beforeEach(() => {
  cy.visit('/automation-practice-form')
  
  })
   it('test student registration', () => {
      cy.studentRegistration();
  })


})
