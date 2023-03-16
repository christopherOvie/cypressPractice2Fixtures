class DemoQA2{

//This is stateless functions

enterFirstname(args){
return "#firstName";

 
}
//another stateless function
enterLastname(args){
    return "#lastName";
   
}

enterEmail(args){
    return "#userEmail"
}
selectGender(){
    return "[type='radio']"
    
}

enterMobile(args){
    return"#userNumber"
}
enterSubject(args){
    return ".subjects-auto-complete__value-container"
                  }
selectHobbies(){
    return "[type='checkbox']";
}

//uploadPicture
selectPicture(args){
    return "#uploadPicture"
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
  
        cy.contains(args).click({force:true})
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
export default DemoQA2;