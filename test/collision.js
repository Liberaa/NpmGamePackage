export class CollisionHandler {
  static checkCollision(player, gameObject) {
    return !(
      player.positionX + player.elementWidth < gameObject.positionX ||
      player.positionX > gameObject.positionX + gameObject.elementWidth ||
      player.positionY + player.elementHeight < gameObject.positionY ||
      player.positionY > gameObject.positionY + gameObject.elementHeight
    )
  }
}
