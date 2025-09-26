// collision.js
import { obstacles, coins } from "./obstacle.js"
import { addScore } from "./score.js"

/**
 * Handles player collisions with obstacles and coins.
 * Uses AABB (Axis-Aligned Bounding Box) for simple 2D collision detection. Can Link overflow
 * https://stackoverflow.com/questions/79650138/swept-aabb-collision-between-circle-and-rectangle 
 *
 * @param {HTMLElement} player - the player element
 * @param {number} currentX - current X position of the player
 * @param {number} currentY - current Y position of the player
 * @param {number} velocityY - current vertical velocity (for gravity/jump)
 * @param {boolean} isJumping - whether the player is in the air
 * @returns {object} updated position, velocity, and jumping state
 */
export function handleCollisions(player, currentX, currentY, velocityY, isJumping) {
    // convert css value for example '60px' into integers so we can use them.
    const playerWidth = parseInt(player.style.width)
    const playerHeight = parseInt(player.style.height)

    // obstacle collisions
    for (const obstacle of obstacles) {
        // Step 1; Check if player overlaps with the obstacle
        const isColliding =
            currentX < obstacle.x + obstacle.width &&
            currentX + playerWidth > obstacle.x &&
            currentY < obstacle.y + obstacle.height &&
            currentY + playerHeight > obstacle.y

        if (isColliding) {
            // Step 2: Work out how much the player overlaps on each side
            const overlapBottom = (obstacle.y + obstacle.height) - currentY
            const overlapTop = (currentY + playerHeight) - obstacle.y
            const overlapLeft = (currentX + playerWidth) - obstacle.x
            const overlapRight = (obstacle.x + obstacle.width) - currentX

            // Step 3 The smallest overlap decides the collision side
            const minOverlap = Math.min(overlapBottom, overlapTop, overlapLeft, overlapRight)

            if (minOverlap === overlapTop && velocityY >= 0) {
                // Player is standing on top of the obstacle
                currentY = obstacle.y - playerHeight
                velocityY = 0
                isJumping = false
            } else if (minOverlap === overlapBottom && velocityY < 0) {
                // Player hit their head on the underside of the obstacle
                currentY = obstacle.y + obstacle.height
                velocityY = 0
            } else if (minOverlap === overlapLeft) {
                // Player hit the obstacle from the left side
                currentX = obstacle.x - playerWidth
            } else if (minOverlap === overlapRight) {
                // Player hit the obstacle from the right side
                currentX = obstacle.x + obstacle.width
            }
        }
    }

  // coin collisions
for (const coin of coins) {
    const isTouching =
        currentX < coin.x + coin.width &&
        currentX + playerWidth > coin.x &&
        currentY < coin.y + coin.height &&
        currentY + playerHeight > coin.y

    if (isTouching) {
        addScore(10)          // add 10 points for collecting
        coin.element.remove() // remove coin from DOM

        // remove coin from array without breaking the loop
        const index = coins.indexOf(coin)
        if (index !== -1) {
            coins.splice(index, 1)
        }
    }
}

    // Return updated state to index.js
    return { currentX, currentY, velocityY, isJumping }
}
