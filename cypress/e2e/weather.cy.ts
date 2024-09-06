/// <reference types="cypress"/>

describe('weather', () => {
  it('show the correct weather for Buenos Aires', () => {

    cy.fixture('weather.json').then(fixture => {
      cy.intercept('forecast', fixture)
  
      cy.visit('http://localhost:5173/')
  
      cy.get('select').should('have.value', 'bs-as')
      cy.get('h1').should('have.text', fixture.city.name)
      cy.get('ul>li:first-of-type').should('have.text', '6/9/2024: Min:15 °C, Max:18 °C')
    })

  })
})
