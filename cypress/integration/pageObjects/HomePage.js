class HomePage {

    getEditBox(){
        return cy.get('div[class="form-group"] input[name="name"]');
    }

    getTwoWayDataBinding(){
        return cy.get('h4 .ng-untouched');
    }

    getGender(){
        return  cy.get('select');
    }

    getEntrepreneur(){
        return cy.get('div[class="form-group"] div:nth-child(4) input');
    }

}

export default HomePage;