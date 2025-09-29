export class PlayerInput {
  #scheme
  #left = false
  #right = false
  #up = false
  #down = false
  #jump = false

  constructor(scheme = 'wasd') {
    this.#scheme = scheme
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)

    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  // Encapsulation of scheme (hide string comparison)
  playerIsUsingWASD() {
    return this.#scheme === 'wasd'
  }

  playerIsUsingPlatform() {
    return this.#scheme === 'platform'
  }

  handleKeyDown(event) {
    const key = event.key.toLowerCase()
    if (this.playerIsUsingWASD()) {
      if (key === 'a') this.#left = true
      if (key === 'd') this.#right = true
      if (key === 's') this.#down = true
      if (key === 'w') this.#up = true
      if (key === ' ') this.#jump = true
    } else if (this.playerIsUsingPlatform()) {
      if (key === 'a') this.#left = true
      if (key === 'd') this.#right = true
      if (key === ' ') this.#jump = true
    }
  }

  handleKeyUp(event) {
    const key = event.key.toLowerCase()
    if (this.playerIsUsingWASD()) {
      if (key === 'a') this.#left = false
      if (key === 'd') this.#right = false
      if (key === 's') this.#down = false
      if (key === 'w') this.#up = false
      if (key === ' ') this.#jump = false
    } else if (this.playerIsUsingPlatform()) {
      if (key === 'a') this.#left = false
      if (key === 'd') this.#right = false
      if (key === ' ') this.#jump = false
    }
  }

  // Query methods
  playerWantsToGoLeft()  { return this.#left }
  playerWantsToGoRight() { return this.#right }
  playerWantsToGoUp()    { return this.#up }
  playerWantsToGoDown()  { return this.#down }
  playerWantsToJump()    { return this.#jump }

  get controlScheme() { return this.#scheme }
}
