/// <reference types="cypress" />

describe('Reqres API Testing', ()=>{
    it('List Users', ()=>{
        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})