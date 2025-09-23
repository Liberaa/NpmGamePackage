export function Obstacle(options = {}){

    const obstacle = document.createElement('div')
    const px = 'px'
    const width = 100
    const height = 100
    const x = 200
    const y = 200

    obstacle.style.position = 'absolute'
    obstacle.style.width = width + px
    obstacle.style.height = height + px
// if user wants image cover url and no repeat else fall back to color = bug / error
    if(options.image){
       obstacle.style.backgroundImage = `url(${options.image})` // this line was cancer to write FUCK OFF
       


    }

    document.body.appendChild(obstacle)

    return obstacle
}