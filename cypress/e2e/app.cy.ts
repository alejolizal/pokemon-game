describe('Pokemon Game App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main heading', () => {
    cy.contains('¿Quien es ese pokemon?').should('be.visible')
  })

  it('should render PokemonGame component', () => {
    cy.get('section').should('contain', '¿Quien es ese pokemon?')
  })

  it('should render PokemonOpciones component', () => {
    cy.get('ul').should('be.visible')
    cy.get('ul li').should('have.length.at.least', 1)
  })

  it('should display pokemon options', () => {
    cy.get('ul li').should('contain', 'Pokemon 1')
    cy.get('ul li').should('contain', 'Pokemon 2')
    cy.get('ul li').should('contain', 'Pokemon 3')
  })

  it('should have clickable pokemon options', () => {
    cy.get('ul li').first().should('have.css', 'cursor', 'pointer')
  })
})

