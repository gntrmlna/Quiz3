/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('Login Successful', ()=>{
        const data ={
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
        cy.request({method:'POST', url:'https://reqres.in/api/login', body: data, headers:{'Content-Type':'application/json'}})
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})