export class GameElement {
  constructor({
    positionX = 0,
    positionY = 0,
    elementWidth = 50,
    elementHeight = 50,
    backgroundColor = 'blue'
  } = {}) {
    this.htmlElement = document.createElement('div')
    this.htmlElement.style.position = 'absolute'
    this.htmlElement.style.left = positionX + 'px'
    this.htmlElement.style.top = positionY + 'px'
    this.htmlElement.style.width = elementWidth + 'px'
    this.htmlElement.style.height = elementHeight + 'px'
    this.htmlElement.style.background = backgroundColor

    document.body.appendChild(this.htmlElement)

    this.positionX = positionX
    this.positionY = positionY
    this.elementWidth = elementWidth
    this.elementHeight = elementHeight
  }

  updatePosition() {
    this.htmlElement.style.left = this.positionX + 'px'
    this.htmlElement.style.top = this.positionY + 'px'
  }
}
