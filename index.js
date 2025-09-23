export function MoveDiv(options = {}) {
    const player = document.createElement('div')
    const controlScheme = options.controlscheme || 'wasd' // w,a,s,d or platform game
    const px = 'px' // instead of writing 'px'
    const jumpStrength = options.jump || 16
    const gravity = options.gravity || 0.3
    const ground = options.ground || 400 // y postion for the flooooooor

    console.log(controlScheme)
    player.style.height = '60px'
    player.style.width = '60px'
    player.style.backgroundColor = options.color || 'blue'
    player.style.position = 'absolute'
    player.style.left = '100px'
    player.style.top = '100px'
    player.style.borderRadius = '24px'

    let left = false
    let right = false
    let up = false
    let down = false
    let isJumping = false
    let velocityY = 0
    let currentX = 100 // left
    let currentY = 100 // top
    let speed = options.speed || 10

    document.body.appendChild(player)


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
            if (key === ' ') isJumping = false // fixed: was "jump" before
        } else if (controlScheme === 'platform') {
            if (key === 'a') left = false
            if (key === 'd') right = false
        }
    })

    function animate() {
        if (controlScheme === 'wasd') {
            if (left) {
                currentX -= speed
                player.style.left = currentX + px
            } if (right) {
                currentX += speed
                player.style.left = currentX + px
            } if (up) {
                currentY -= speed
                player.style.top = currentY + px
            } if (down) {
                currentY += speed
                player.style.top = currentY + px
            }
        } else if (controlScheme === 'platform') {
            if (left) {
                currentX -= speed
                player.style.left = currentX + px
            } if (right) {
                currentX += speed
                player.style.left = currentX + px
            }

            // gravity and jumping for platform
            velocityY += gravity
            currentY += velocityY
            player.style.top = currentY + px

            // stop at groundY
            if (currentY >= ground) { // adjust ground value
                currentY = ground
                velocityY = 0
                isJumping = false
            }
        }

        requestAnimationFrame(animate)
    }
    animate()

}
