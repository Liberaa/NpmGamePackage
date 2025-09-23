export const obstacles = []

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


    document.body.appendChild(obstacle)

    obstacles.push({
         obstacle, x, y, width, height
    })

    return obstacle
}

// coins to keep scoor or something don't know yet. 
export function value(options = {}){
const coin = document.createElement('div')

coin.style.width = options.width || '60px'
coin.style.height = options.height || '60px'
coin.style.position = 'absolute'
coin.style.borderRadius = '180px'
coin.style.backgroundColor = 'gold'
coin.style.left = '100px'
coin.style.top

document.body.appendChild(coin)

return coin
}


//TODO Track obstacle so we can have a collision so we can jump on it. 
// Plan push obstacle to an array, in index.js loop throw and I don't know atm...