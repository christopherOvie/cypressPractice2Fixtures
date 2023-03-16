class DemoQA{

//This is stateless functions

enterFirstname(args){
const field= cy.get("#firstName")
field.type(args)
return this;
}
//another stateless function
enterLastname(args){
    const field= cy.get("#lastName") 
    field.type(args)
return this;
}

enterEmail(args){
    const field= cy.get("#userEmail")
    field.clear(); 
    field.type(args)
    return this;
}
selectGender(){
    const field= cy.get("[type='radio']") 
    field.eq(1).check({force: true})
    return this;
}

enterMobile(args){
    const field= cy.get("#userNumber") 
    field.type(args)
    return this;
}
enterSubject(args){
    const field= cy.get('.subjects-auto-complete__value-container') 
    field.type(args)
    return this;
                  }
selectHobbies(){
    const field= cy.get("[type='checkbox']") 
    field.eq(0).check({force: true})
    return this;
}

//uploadPicture
selectPicture(args){
    const field= cy.get("#uploadPicture") 
    field.selectFile(args)
    return this;
}
enterAddress(args){
    const field= cy.get("#currentAddress") 
    field.type(args)
    return this;
}
//currentAddress  //.sc-kEqXSa.jLVwJG.rc-item.rc-sponsored

selectState(args){
    //cy.get('.container > :nth-child(2) > :nth-child(1)')
    const field= cy.get('#state > .css-yk16xz-control > .css-1hwfws3') 
    field.click()
    //.then(()=>{
        cy.contains(args).click()
              
    //}) 
    return this;     
}
selectCity(args){ 
    const field= cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
    field.click()
    //then(()=>{
        cy.contains(args).click({force:true})
        
   // }) 
    return this;  
}
clickSubmit(){
    const field= cy.get('#submit')
    field.click({force:true});
    return this; 
    
}


verifyMessage(args){
    const field =cy.get('#example-modal-sizes-title-lg')
    field.should('have.text',args)  
}

clickClose(){
    const field = cy.get('#closeLargeModal')
    field.click()
}
}
export default DemoQA;