/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('Login Unsuccessful', ()=>{
        const data ={
            email: "peter@klaven"
        }
        cy.request({method:'POST', url:'https://reqres.in/api/login', body: data, headers:{'Content-Type':'application/json'}, failOnStatusCode:false})
        .then((response)=>{
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
})