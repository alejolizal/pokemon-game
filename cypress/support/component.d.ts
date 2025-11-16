/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    mount(component: any, options?: any): Chainable<any>
  }
}

