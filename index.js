import { obstacles } from "./obstacle.js"
import { createGameElement } from "./element.js"

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

    // re write to switch? (to many if statments. )
    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // if user got caps
        // if user wants wasd game do this else do that
        if (controlScheme === 'wasd') {
            if (key === 'a') left = true
            if (key === 'd') right = true
            if (key === 's') down = true
            if (key === 'w') up = true
            if (key === ' ') isJumping = true // maby not on wasd
        } else if (controlScheme === 'platform') {
            if (key === 'a') left = true
            if (key === 'd') right = true
            if (key === ' ' && !isJumping) {
                isJumping = true
                velocityY = -jumpStrength
            }
        }
    })

    document.addEventListener('keyup', event => {
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
    })

    function animate() {
        if (controlScheme === 'wasd') {
            if (left && currentX > 0) {
                currentX -= speed
                player.style.left = currentX + px // adjust window.innerwidth - 70 or what ever it's- so it matches player px
            }
            if (right && currentX < window.innerWidth - 70) {
                currentX += speed
                player.style.left = currentX + px
            }
            if (up && currentY > 0) {
                currentY -= speed
                player.style.top = currentY + px
            }
            if (down && currentY < window.innerHeight - 60) {
                currentY += speed
                player.style.top = currentY + px
            }
        } else if (controlScheme === 'platform') {
            if (left && currentX > 0) {
                currentX -= speed
                player.style.left = currentX + px
            }
            if (right && currentX < window.innerWidth - 65) {
                currentX += speed
                player.style.left = currentX + px
            }

            // gravity and jumping for platform
            velocityY += gravity
            currentY += velocityY
            player.style.top = currentY + px

            // check collisions with obstacles
            for (const obstacle of obstacles) {
                const playerBottom = currentY + parseInt(player.style.height)
                const playerTop = currentY
                const playerRight = currentX + parseInt(player.style.width)
                const playerLeft = currentX

                const obstacleTop = obstacle.y
                const obstacleBottom = obstacle.y + obstacle.height
                const obstacleLeft = obstacle.x
                const obstacleRight = obstacle.x + obstacle.width

                // standing on obstacle
                if (
                    playerBottom >= obstacleTop &&
                    playerBottom <= obstacleTop + 20 &&
                    playerRight > obstacleLeft &&
                    playerLeft < obstacleRight &&
                    velocityY >= 0
                ) {
                    currentY = obstacleTop - parseInt(player.style.height)
                    velocityY = 0
                    isJumping = false
                }

                // hitting head under obstacle
                if (
                    playerTop <= obstacleBottom &&
                    playerTop >= obstacleBottom - 20 &&
                    playerRight > obstacleLeft &&
                    playerLeft < obstacleRight &&
                    velocityY < 0
                ) {
                    currentY = obstacleBottom
                    velocityY = 0
                    // left side of the obstacle so you can fly throw it 
                } 
                if (
                    playerRight >= obstacleLeft && 
                    playerLeft < obstacleLeft && 
                    playerBottom > obstacleTop && 
                    playerTop < obstacleBottom
                ) {
                    currentX = obstacleLeft - parseInt(player.style.width)

                    // SOmething wrong here can't find it :() 
                    // Something here are wrong setnings let's try to just break it down
                    // if playerLeft are smaller or the same as the right obstacle 
                }

                // tunnel vission
                if (
                    playerLeft <= obstacleRight &&
                    playerRight > obstacleRight &&
                    playerBottom > obstacleTop &&
                    playerTop < obstacleBottom
                ) {
                    currentX = obstacleRight
                }
            }

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
