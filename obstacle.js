export function Obstacle(options = {}){

    const obstacle = document.createElement('div')
    const px = 'px'
     const width = options.width || 100
    const height = options.height || 100
    const x = options.x || 200
    const y = options.y || 200

    obstacle.style.position = 'absolute'
    obstacle.style.width = width + px
    obstacle.style.height = height + px
    obstacle.style.left = x + px
    obstacle.style.top = y + px
// if user wants image cover url and no repeat else fall back to color = bug / error
    if(options.image){
       obstacle.style.backgroundImage = `url(${options.image})`
       obstacle.style.backgroundSize = 'cover'
       obstacle.style.backgroundRepeat = 'no-repeat'
    } else {
        obstacle.style.backgroundColor = options.color || 'blue'
    }

    document.body.appendChild(obstacle)

    return obstacle
}