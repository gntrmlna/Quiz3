/// <reference types='cypress' />

describe('Reqres API Testing', ()=>{
    it('PUT Update', ()=>{
        const data ={
            name: "morpheus",
            job: "zion resident"
        }
        cy.request({method:'PUT', url:'https://reqres.in/api/users/2', body: data, headers:{'Content-Type':'application/json'}})
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name')
            expect(response.body.name).to.eq(data.name)
            expect(response.body.job).to.eq(data.job)
        })
    })
})