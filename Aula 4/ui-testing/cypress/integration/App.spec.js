describe('App Developers Skills', () => {

    before(() => {
        cy.visit('http://localhost:3000/');
    });   
      
    it('should display Developers App title', () => {
        cy.get('h1').contains('Developers App');
                    
    });

    it('should display Add skill form', () => {
        cy.get('#addSkill').should('be.visible');
                    
    });
         
    it('should display all the inputs', () => {
        cy.get('#skillName').should('be.visible');
        cy.get('#developers').should('be.visible'); 
        cy.get('#technologies').should('be.visible'); 
        cy.get('#roles').should('be.visible');            
    });

    it('should fill all the inputs and click Add skill button', () => {
        cy.get('#skillName').type('front-end');
        cy.get('#developers').type('Developer test'); 
        cy.get('#technologies').type('React'); 
        cy.get('#roles').type('Senior');
        cy.get('#load-skills-button').click();        
        
    });       
       
    it('should show the skill list when clicked Add skill button', () => {
        cy.get('#load-skills-button').click();
        cy.get('li').should('not.have.value', 'front end');     
        
    });
});