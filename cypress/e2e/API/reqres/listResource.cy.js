/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('List <Resource>', ()=>{
        cy.request('GET', 'https://reqres.in/api/unknown')
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})