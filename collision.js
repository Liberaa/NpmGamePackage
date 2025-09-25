import { obstacles } from "./obstacle"

export function handleCollision(player, currentX, currentY, velocityY, ) {
    const playerWidth = parseInt(player.style.width)
    const playerHeight = parseInt(player.style.height)

    for(const obstacle of obstacles){
         const playerBottom = currentY + playerHeight
         const playerTop = currentY
         const playerRight = currentX + playerWidth
         const playerLeft = currentX


    }

}