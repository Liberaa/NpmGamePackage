export class PlayerInput {
  constructor(controlScheme = 'wasd') {
    this.controlScheme = controlScheme
    this.left = false
    this.right = false
    this.up = false
    this.down = false
    this.jumpPressed = false

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)

    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyDown(event) {
    const key = event.key.toLowerCase()
    if (this.controlScheme === 'wasd') {
      if (key === 'a') this.left = true
      if (key === 'd') this.right = true
      if (key === 's') this.down = true
      if (key === 'w') this.up = true
      if (key === ' ') this.jumpPressed = true
    } else if (this.controlScheme === 'platform') {
      if (key === 'a') this.left = true
      if (key === 'd') this.right = true
      if (key === ' ') this.jumpPressed = true
    }
  }

  handleKeyUp(event) {
    const key = event.key.toLowerCase()
    if (this.controlScheme === 'wasd') {
      if (key === 'a') this.left = false
      if (key === 'd') this.right = false
      if (key === 's') this.down = false
      if (key === 'w') this.up = false
      if (key === ' ') this.jumpPressed = false
    } else if (this.controlScheme === 'platform') {
      if (key === 'a') this.left = false
      if (key === 'd') this.right = false
      if (key === ' ') this.jumpPressed = false
    }
  }

  playerWantsToGoLeft()  { return this.left }
  playerWantsToGoRight() { return this.right }
  playerWantsToGoUp()    { return this.up }
  playerWantsToGoDown()  { return this.down }
  playerWantsToJump()    { return this.jumpPressed }
}
