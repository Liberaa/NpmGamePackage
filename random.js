// switch case on the keys instead of if ?

    /*
document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase() // if user got caps

    switch (controlScheme) {
        case 'wasd':
            switch (key) {
                case 'a':
                    left = true
                    break
                case 'd':
                    right = true
                    break
                case 's':
                    down = true
                    break
                case 'w':
                    up = true
                    break
                case ' ':
                    isJumping = true // maby not on wasd
                    break
            }
            break

        case 'platform':
            switch (key) {
                case 'a':
                    left = true
                    break
                case 'd':
                    right = true
                    break
                case ' ':
                    if (!isJumping) {
                        isJumping = true
                        velocityY = -jumpStrength
                    }
                    break
            }
            break
    }
})

document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase()

    switch (controlScheme) {
        case 'wasd':
            switch (key) {
                case 'a':
                    left = false
                    break
                case 'd':
                    right = false
                    break
                case 's':
                    down = false
                    break
                case 'w':
                    up = false
                    break
                case ' ':
                    isJumping = false // fixed: was "jump" before
                    break
            }
            break

        case 'platform':
            switch (key) {
                case 'a':
                    left = false
                    break
                case 'd':
                    right = false
                    break
            }
            break
    }
})
 */