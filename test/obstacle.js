export const obstacles = []
export const coins = []

export class Obstacle {
  constructor({ positionX = 0, positionY = 0, width = 50, height = 50, color = 'blue', border = '2px solid white' } = {}) {
    this.x = positionX
    this.y = positionY
    this.width = width
    this.height = height

    this.element = document.createElement('div')
    this.element.style.position = 'absolute'
    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
    this.element.style.width = this.width + 'px'
    this.element.style.height = this.height + 'px'
    this.element.style.background = color
    this.element.style.border = border
    document.body.appendChild(this.element)

    obstacles.push(this)
  }

  getBounds() {
    return {
      left: this.x,
      top: this.y,
      right: this.x + this.width,
      bottom: this.y + this.height,
      width: this.width,
      height: this.height
    }
  }

  remove() {
    this.element.remove()
  }
}

export class Coin {
  constructor({ positionX = 0, positionY = 0, size = 20 } = {}) {
    this.x = positionX
    this.y = positionY
    this.width = size
    this.height = size

    this.element = document.createElement('div')
    this.element.style.position = 'absolute'
    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
    this.element.style.width = this.width + 'px'
    this.element.style.height = this.height + 'px'
    this.element.style.background = 'yellow'
    this.element.style.borderRadius = '50%'
    document.body.appendChild(this.element)

    coins.push(this)
  }

  getBounds() {
    return {
      left: this.x,
      top: this.y,
      right: this.x + this.width,
      bottom: this.y + this.height,
      width: this.width,
      height: this.height
    }
  }

  remove() {
    this.element.remove()
  }
}
