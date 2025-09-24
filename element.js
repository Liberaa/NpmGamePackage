// element.js
export function createGameElement(options = {}) {
    const element = document.createElement('div')
    const px = 'px' // felt this was faster thats why I did this. :P


    element.style.position = 'absolute'
    element.style.width = (options.width || 60) + px
    element.style.height = (options.height || 60) + px
    element.style.left = (options.x || 100) + px
    element.style.top = (options.y || 100) + px
    element.style.borderRadius = (options.borderRadius || 0) + px

    if (options.image) {
        element.style.backgroundImage = `url(${options.image})`
        element.style.backgroundSize = options.backgroundSize || 'cover'
        element.style.backgroundRepeat = options.backgroundRepeat || 'no-repeat'
    } else {
        element.style.backgroundColor = options.color || 'black'
    }

    document.body.appendChild(element)
    return element
}
