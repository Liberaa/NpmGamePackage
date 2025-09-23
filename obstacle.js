export function Obstacle(options = {}) {
    //default
    const obstacle = document.createElement('div')
    const px = 'px'
    const width = options.width || 100
    const height = options.height || 100
    const x = options.x || 200
    const y = options.y || 200
    // default
    obstacle.style.position = 'absolute'
    obstacle.style.width = width + px
    obstacle.style.height = height + px
    obstacle.style.left = x + px
    obstacle.style.top = y + px

    // background (image or color)
    if (options.image) {
        obstacle.style.backgroundImage = `url(${options.image})`
        obstacle.style.backgroundSize = options.backgroundSize || 'cover'
        obstacle.style.backgroundRepeat = options.backgroundRepeat || 'no-repeat'
    } else {
        obstacle.style.backgroundColor = options.color || 'blue'
    }

    // border
    if (options.border) {
        obstacle.style.border = options.border
    }

    // circle option
    if (options.rounded) {
        obstacle.style.borderRadius = options.rounded === true ? '50%' : options.rounded
    }

    // opacity
    if (options.opacity !== undefined) {
        obstacle.style.opacity = options.opacity
    }

    // z-index
    if (options.zIndex !== undefined) {
        obstacle.style.zIndex = options.zIndex
    }

    // rotation
    if (options.rotate) {
        obstacle.style.transform = `rotate(${options.rotate}deg)`
    }

    // css options
    if (options.className) {
        obstacle.classList.add(options.className)
    }

    // custom id
    if (options.id) {
        obstacle.id = options.id
    }

    document.body.appendChild(obstacle)

    return obstacle
}
