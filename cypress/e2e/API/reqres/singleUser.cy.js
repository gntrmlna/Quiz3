/// <reference types="cypress" />

describe('Reqres API Testing', ()=>{
    it('Single User', ()=>{
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    })
})