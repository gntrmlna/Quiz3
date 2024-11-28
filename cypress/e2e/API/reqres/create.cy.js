/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('Create', ()=>{
        const data ={
            name: "morphes",
            job: "leader"
        }
        cy.request({method:'POST', url:'https://reqres.in/api/users', body: data, headers:{'Content-Type':'application/json'}})
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name')
            expect(response.body.name).to.eq(data.name)
            expect(response.body.job).to.eq(data.job)
        })
    })
})