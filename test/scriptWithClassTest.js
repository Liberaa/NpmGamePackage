import { PlayerInput } from './PlayerInput.js'

export function startPlayer(controlScheme = 'wasd', options = {}) {
  const player = document.createElement('div')
  player.style.position = 'absolute'
  player.style.width = '60px'
  player.style.height = '60px'
  player.style.background = 'red'
  player.style.left = '100px'
  player.style.top = '100px'
  document.body.appendChild(player)

  const px = 'px'
  const speed = options.speed || 8
  const gravity = options.gravity || 0.5
  const jumpStrength = options.jumpStrength || 12
  const ground = window.innerHeight - 60

  let currentX = 100
  let currentY = 100
  let velocityY = 0

  const input = new PlayerInput(controlScheme)

  function animate() {
    if (input.playerWantsToGoLeft() && currentX > 0) {
      currentX -= speed
      player.style.left = currentX + px
    }
    if (input.playerWantsToGoRight() && currentX < window.innerWidth - 60) {
      currentX += speed
      player.style.left = currentX + px
    }

    if (controlScheme === 'wasd') {
      if (input.playerWantsToGoUp() && currentY > 0) {
        currentY -= speed
        player.style.top = currentY + px
      }
      if (input.playerWantsToGoDown() && currentY < window.innerHeight - 60) {
        currentY += speed
        player.style.top = currentY + px
      }
    } else if (controlScheme === 'platform') {
      if (input.playerWantsToJump() && velocityY === 0 && currentY >= ground) {
        velocityY = -jumpStrength
      }

      velocityY += gravity
      currentY += velocityY

      if (currentY >= ground) {
        currentY = ground
        velocityY = 0
      }

      player.style.top = currentY + px
    }

    requestAnimationFrame(animate)
  }

  animate()

  return { element: player }
}

window.startPlayer = startPlayer
