/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('Register Unsuccessful', ()=>{
        const data ={
            email: "sydney@fife"
        }
        cy.request({method:'POST', url:'https://reqres.in/api/register', body: data, headers:{'Content-Type':'application/json'}, failOnStatusCode:false})
        .then((response)=>{
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
})