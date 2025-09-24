import { createGameElement } from './element.js'

export const obstacles = []

export function Obstacle(options = {}) {
    //default
    const width = options.width || 100
    const height = options.height || 100
    const x = options.x || 200
    const y = options.y || 200

    // use helper instead of manual styles
    const obstacle = createGameElement({
        width,
        height,
        x,
        y,
        color: options.color,
        image: options.image,
        backgroundSize: options.backgroundSize,
        backgroundRepeat: options.backgroundRepeat
    })

    obstacles.push({
         obstacle, x, y, width, height
    })

    return obstacle
}

// coins to keep scoor or something don't know yet. 
export function value(options = {}) {
    const coin = createGameElement({
        width: options.width || 60,
        height: options.height || 60,
        x: options.x || 100,
        y: options.y || 100,
        color: 'gold',
        borderRadius: 180
    })

    return coin
}

//TODO Track obstacle so we can have a collision so we can jump on it. 
// Plan push obstacle to an array, in index.js loop throw and I don't know atm...
