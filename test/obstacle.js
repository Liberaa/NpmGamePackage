import { GameElement } from './element.js'

export class Obstacle extends GameElement {
  constructor(options = {}) {
    super({ ...options, backgroundColor: options.backgroundColor || 'black' })
  }
}

export class Coin extends GameElement {
  constructor(options = {}) {
    super({ ...options, elementWidth: 30, elementHeight: 30, backgroundColor: 'gold' })
    this.htmlElement.style.borderRadius = '50%'
  }
}
