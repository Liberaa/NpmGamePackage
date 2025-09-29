import { obstacles, coins } from './obstacle.js'
import { score } from './score.js'

export class AABBCollider {
  static overlaps(a, b) {
    return a.left < b.right &&
      a.right > b.left &&
      a.top < b.bottom &&
      a.bottom > b.top
  }

  static resolvePlayerVsObstacles(player) {
    let vy = player.velocityY
    let isJumping = player.isJumping
    const p = player.getBounds()

    for (const obstacle of obstacles) {
      const o = obstacle.getBounds()
      if (!this.overlaps(p, o)) continue

      const overlapTop = p.bottom - o.top
      const overlapBottom = o.bottom - p.top
      const overlapLeft = p.right - o.left
      const overlapRight = o.right - p.left
      const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight)

      if (minOverlap === overlapTop && vy >= 0) {
        player.positionY = o.top - p.height
        vy = 0
        isJumping = false
      } else if (minOverlap === overlapBottom && vy < 0) {
        player.positionY = o.bottom
        vy = 0
      } else if (minOverlap === overlapLeft) {
        player.positionX = o.left - p.width
      } else if (minOverlap === overlapRight) {
        player.positionX = o.right
      }
    }

    player.velocityY = vy
    player.isJumping = isJumping
  }

  static handleCoinPickups(player) {
    const p = player.getBounds()
    for (let i = coins.length - 1; i >= 0; i--) {
      const coin = coins[i]
      const c = coin.getBounds()
      if (!this.overlaps(p, c)) continue

      score.add(10)
      coin.remove()
      coins.splice(i, 1)
    }
  }
}
