/// <reference types="cypress" />

describe('Login Feature', ()=>{
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
    })
    it('Pengguna dapat login menggunakan data valid - TC_001', ()=>{
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text', 'Dashboard');
    })
    it('Pengguna tidak dapat login menggunakan data invalid - TC_002', ()=>{
        cy.get('[name="username"]').type('cobacoba');
        cy.get('[name="password"]').type('cobajuga');
        cy.get('[type="submit"]').click();
        cy.get('p').contains('Invalid credentials').should('have.text', 'Invalid credentials');
    })
    it('Case sensitive password - TC_004', ()=>{
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('Admin123');
        cy.get('[type="submit"]').click();
        cy.get('p').contains('Invalid credentials').should('have.text', 'Invalid credentials');
    })
    it('Pengguna tidak dapat login jika username dan password tidak diisi - TC_005', ()=>{
        cy.get('[name="username"]').should('have.value', '');
        cy.get('[name="password"]').should('have.value', '');
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text', 'Required');
    })
    it('Pengguna tidak dapat login jika password tidak diisi - TC_006', ()=>{
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').should('have.value', '');
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text', 'Required');
    })

    it('Pengguna tidak dapat login jika username salah dan password kosong - TC_007', ()=>{
        cy.get('[name="username"]').type('coba');
        cy.get('[name="password"]').should('have.value', '');
        cy.get('[type="submit"]').click();
        cy.get('span').contains('Required').should('have.text', 'Required');
    })
})