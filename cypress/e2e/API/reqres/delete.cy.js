/// <reference types='cypress'/>

describe('Reqres API Testing', ()=>{
    it('Delete', ()=>{
        cy.request({method:'DELETE',
                    url:'https://reqres.in/api/users/2'
                })
        .then((response)=>{
            expect(response.status).to.eq(204)
        })
    })
})