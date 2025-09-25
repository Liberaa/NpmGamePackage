import { obstacles } from "./obstacle"

export function handleCollision(player, currentX, currentY, velocityY, ) {
    const playerWidth = parseInt(player.style.width)
    const playerHeight = parseInt(player.style.height)

    for(const obstacle of obstacles){
         const playerBottom = currentY + playerHeight
         const playerTop = currentY
         const playerRight = currentX + playerWidth
         const playerLeft = currentX

        const obstacleTop = obstacle.y
        const obstacleBottom = obstacle.y + obstacle.height
        const obstacleLeft = obstacle.x
        const obstacleRight = obstacle.x + obstacle.width

        //Standing on obstacle (on Top)

        if( playerBottom >= obstacleTop && playerBottom <= obstacleTop + 20 && playerRight > obstacleLeft && playerLeft < obstacleRight && velocityY >= 0){
            currentY = obstacleTop - playerHeight
            velocityY = 0
            // and not jumping
        }


    }

}