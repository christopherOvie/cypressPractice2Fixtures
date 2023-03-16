//import DemoQA  from "../pageObjects/demoqa.po";
import DemoQA  from "../pageObjects/demoqa.po"


const page = new DemoQA();
Cypress.Commands.add('studentRegistration',()=>{
    cy.fixture('demoqa.json').then((data)=>{
    page.enterFirstname(data.firstName)
    page.enterLastname(data.lastName)
    page.enterEmail(data.email)
    page.selectGender()
     page.enterMobile(data.phoneNumber)
     page.enterSubject(data.subject)
    page.selectHobbies()
    page.selectPicture(data.picture)
    page.selectState(data.state)
    page.selectCity(data.city)
    page.clickSubmit()
    page.verifyMessage(data.message)
    page.clickClose()
})
})