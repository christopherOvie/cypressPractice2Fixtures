//es6 function
import DemoQA  from "../../pageObjects/demoqa.po";

describe('demo qa website', () => {
    const page = new DemoQA();
  beforeEach(() => {
  cy.visit('/automation-practice-form')
  
  })
   it('test student form registration', () => {
   

    cy.fixture('testdata.json').then((data)=>{
        
        page.enterFirstname(data.firstName)
        page.enterLastname(data.lastName)
        page.enterEmail(data.email)
        page.selectGender()
         page.enterMobile(data.phoneNumber)
        // page.enterSubject(data.subject)
        page.selectHobbies()
        page.selectPicture(data.picture)
        page.selectState(data.state)
        page.selectCity(data.city)
        page.clickSubmit()
        page.verifyMessage(data.message)
        page.clickClose()
 
    })
      
  })
})
