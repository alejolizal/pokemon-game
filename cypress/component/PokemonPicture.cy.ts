import PokemonPicture from '../../src/modules/pokemon/components/PokemonPicture.vue'

describe('PokemonPicture Component', () => {
  it('should render the pokemon image', () => {
    cy.mount(PokemonPicture)
    cy.get('img').should('be.visible')
    cy.get('img').should('have.attr', 'alt', 'pokemon')
  })

  it('should have the correct image source', () => {
    cy.mount(PokemonPicture)
    cy.get('img').should('have.attr', 'src').and('include', 'dream-world')
  })

  it('should apply brightness-0 class', () => {
    cy.mount(PokemonPicture)
    cy.get('img').should('have.class', 'brightness-0')
  })
})

