import { createGameElement } from './element.js'

export const obstacles = []
export const coins = [] 

export function Obstacle(options = {}) {
    //default
    const width = options.width || 100
    const height = options.height || 100
    const x = options.x || 200
    const y = options.y || 200

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

    obstacles.push({ obstacle, x, y, width, height })

    return obstacle
}

// coins to keep score
export function value(options = {}) {
    const width = options.width || 60
    const height = options.height || 60
    const x = options.x || 100
    const y = options.y || 100

    const coin = createGameElement({
        width,
        height,
        x,
        y,
        color: 'gold',
        borderRadius: 180
    })

  
    coins.push({ element: coin, x, y, width, height })

    return coin
}
