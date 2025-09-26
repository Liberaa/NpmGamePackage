import { obstacles } from "./obstacle.js" // no need
import { createGameElement } from "./element.js"
import { handleCollisions } from "./collision.js"

export function MoveDiv(options = {}) {
    // create player with helper
    const player = createGameElement({
        width: 60,
        height: 60,
        x: 100,
        y: 100,
        borderRadius: 24,
        color: options.color,
        image: options.image,
        backgroundSize: options.backgroundSize,
        backgroundRepeat: options.backgroundRepeat
    })

    const controlScheme = options.controlscheme || 'wasd' // w,a,s,d or platform game
    const px = 'px' // instead of writing 'px'
    const jumpStrength = options.jump || 15
    const gravity = options.gravity || 0.3
    const ground = options.ground || 900 // y postion for the flooooooor

    let left = false
    let right = false
    let up = false
    let down = false
    let isJumping = false
    let velocityY = 0
    let currentX = 60 // left
    let currentY = 100 // top
    let speed = options.speed || 15
  

    document.addEventListener('keyup', event => {
        this.keyUpListener(event)
    })



    class PlayerInput {
        constructor(controlScheme = '') {
            this.left = left
            this.right = right
            this.up = up
        }
    left = false
     right = false
     up = false
     down = false

         keyUpListener(event) {
        const key = event.key.toLowerCase()
        if (controlScheme === 'wasd') {
            if (key === 'a') left = false
            if (key === 'd') right = false
            if (key === 's') down = false
            if (key === 'w') up = false
            if (key === ' ') isJumping = false
        } else if (controlScheme === 'platform') {
            if (key === 'a') left = false
            if (key === 'd') right = false
        }
    }

    

    }

    function animate(playerInput) {

        if (playerInput.playerWantsToGoLeft() && currentX > 0) {
            currentX -= speed
            player.style.left = currentX + px 
        }
        if (playerInput.playerWantsToGoRight() && currentX < window.innerWidth - 60) {
            currentX += speed
            player.style.left = currentX + px
        }

        if (controlScheme === 'wasd') {

            if (up && currentY > 0) {
                currentY -= speed
                player.style.top = currentY + px
            }
            if (down && currentY < window.innerHeight - 60) {
                currentY += speed
                player.style.top = currentY + px
            }
        } else if (controlScheme === 'platform') {


            // gravity and jumping for platform
            velocityY += gravity
            currentY += velocityY
            player.style.top = currentY + px

            // check collisions with obstacles (moved into collision.js)
            const result = handleCollisions(player, currentX, currentY, velocityY, isJumping)
            currentX = result.currentX
            currentY = result.currentY
            velocityY = result.velocityY
            isJumping = result.isJumping

            // stop at groundY
            if (currentY >= ground) {
                currentY = ground
                velocityY = 0
                isJumping = false
            }
        }

        requestAnimationFrame(animate)
    }
    animate()
}
