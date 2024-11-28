/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('Register Successful', ()=>{
        const data ={
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
        cy.request({method:'POST', url:'https://reqres.in/api/register', body: data, headers:{'Content-Type':'application/json'}})
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})