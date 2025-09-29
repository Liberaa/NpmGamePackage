import { PlayerInput } from './PlayerInput.js'
import { AABBCollider } from './collision.js'
import { GameElement } from './element.js'

// Player class
class Player extends GameElement {
  constructor({ positionX = 100, positionY = 100, color = 'red' } = {}) {
    super({
      positionX,
      positionY,
      elementWidth: 60,
      elementHeight: 60,
      backgroundColor: color
    })
    this.velocityY = 0
    this.isJumping = false
  }

  getBounds() {
    return {
      left: this.positionX,
      top: this.positionY,
      right: this.positionX + this.elementWidth,
      bottom: this.positionY + this.elementHeight,
      width: this.elementWidth,
      height: this.elementHeight
    }
  }
}

// Game class
export class Game {
  constructor(controlScheme = 'platform', options = {}) {
    this.movementSpeed = options.movementSpeed || 8
    this.gravity = options.gravityForce || 0.5
    this.jumpStrength = options.jumpStrengthValue || 12

    this.player = new Player({ color: options.color || 'red' })
    this.input = new PlayerInput(controlScheme)

    this.groundY = window.innerHeight - this.player.elementHeight

    this.animate = this.animate.bind(this)
    requestAnimationFrame(this.animate)
  }

  animate() {
    this.#animateHorizontalMovement()

    if (this.input.playerIsUsingWASD()) {
      this.#animateWASDStyle()
    } else if (this.input.playerIsUsingPlatform()) {
      this.#animatePlatformStyle()
    }

    AABBCollider.resolvePlayerVsObstacles(this.player)
    this.player.updatePosition()
    AABBCollider.handleCoinPickups(this.player)

    const sm = typeof window !== 'undefined' ? window.__sceneManager : null
    if (sm && typeof sm.checkProgress === 'function') {
      sm.checkProgress()
    }

    requestAnimationFrame(this.animate)
  }

  // --- Private helpers ---
  #animateHorizontalMovement() {
    if (this.input.playerWantsToGoLeft() && this.player.positionX > 0) {
      this.player.positionX -= this.movementSpeed
    }
    if (this.input.playerWantsToGoRight() && this.player.positionX < window.innerWidth - this.player.elementWidth) {
      this.player.positionX += this.movementSpeed
    }
  }

  #animateWASDStyle() {
    if (this.input.playerWantsToGoUp() && this.player.positionY > 0) {
      this.player.positionY -= this.movementSpeed
    }
    if (this.input.playerWantsToGoDown() && this.player.positionY < window.innerHeight - this.player.elementHeight) {
      this.player.positionY += this.movementSpeed
    }
  }

  #animatePlatformStyle() {
    if (this.input.playerWantsToJump() && !this.player.isJumping) {
      this.player.velocityY = -this.jumpStrength
      this.player.isJumping = true
    }

    this.player.velocityY += this.gravity
    this.player.positionY += this.player.velocityY

    if (this.player.positionY >= this.groundY) {
      this.player.positionY = this.groundY
      this.player.velocityY = 0
      this.player.isJumping = false
    }
  }
}

// Allow global startGame for quick demos
window.startGame = (scheme, options) => new Game(scheme, options)
