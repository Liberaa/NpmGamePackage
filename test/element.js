export class GameElement {
  constructor({
    positionX = 0,
    positionY = 0,
    elementWidth = 50,
    elementHeight = 50,
    backgroundColor = 'blue'
  } = {}) {
    this.positionX = positionX
    this.positionY = positionY
    this.elementWidth = elementWidth
    this.elementHeight = elementHeight

    this.htmlElement = document.createElement('div')
    this.htmlElement.style.position = 'absolute'
    this.htmlElement.style.background = backgroundColor
    this.updatePosition()

    this.htmlElement.style.width = this.elementWidth + 'px'
    this.htmlElement.style.height = this.elementHeight + 'px'

    document.body.appendChild(this.htmlElement)
  }

  updatePosition() {
    this.htmlElement.style.left = this.positionX + 'px'
    this.htmlElement.style.top = this.positionY + 'px'
  }

  getBounds() {
    return {
      left: this.positionX,
      top: this.positionY,
      right: this.positionX + this.elementWidth,
      bottom: this.positionY + this.elementHeight,
      width: this.elementWidth,
      height: this.elementHeight
    }
  }

  remove() {
    this.htmlElement.remove()
  }
}
