export function MoveDiv(options = {}) {
    const player = document.createElement('div')
    const controlScheme = options.controlScheme || 'wasd' // w,a,s,d or platform game
    const px = 'px' // instead of writing 'px'
    const jumpStrength = options.jump || 16

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
    let velocityY = 0
    let currentX = 100 // left
    let currentY = 100 // top
    let speed = options.speed || 10
    let jump = 5
    let gravity = options.gravity || 0.3

    document.body.appendChild(player)


    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // if user got caps
// if user wants wasd game do this else do that
       if (controlScheme === 'wasd') {
            if (key === 'a') left = true
            if (key === 'd') right = true
            if (key === 's') down = true
            if (key === ' ') up = true
        } else if (controlScheme === 'platform') {
            if (key === 'a') left = true
            if (key === 'd') right = true
            if (key === ' ' && !isJumping) {
                isJumping = true
                velocityY = -jumpStrength
            }
        }
        console.log(key)
    })

     document.addEventListener('keyup', event => {
        const key = event.key.toLowerCase()
        if (controlScheme === 'wasd') {
            if (key === 'a') left = false
            if (key === 'd') right = false
            if (key === 's') down = false
            if (key === ' ') up = false
        } else if (controlScheme === 'platform') {
            if (key === 'a') left = false
            if (key === 'd') right = false
        }
        console.log(key)
    })

    function animate(){
        requestAnimationFrame(animate)
    }
    animate()

}