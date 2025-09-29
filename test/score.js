let scoreInstance = null

export class Score {
  #value = 0
  #element = null

  constructor() {
    if (scoreInstance) return scoreInstance

    this.#element = document.createElement('div')
    this.#element.style.position = 'fixed'
    this.#element.style.top = '10px'
    this.#element.style.left = '10px'
    this.#element.style.color = 'white'
    this.#element.style.fontSize = '18px'
    this.#element.style.fontFamily = 'arial'
    this.#element.style.background = 'gray'
    this.#element.style.padding = '5px 10px'
    this.#element.style.borderRadius = '15px'
    this.#element.style.zIndex = '9999'
    document.body.appendChild(this.#element)

    this.update()
    scoreInstance = this
  }

  add(points = 0) {
    this.#value += points
    this.update()
  }

  reset() {
    this.#value = 0
    this.update()
  }

  get value() {
    return this.#value
  }

  update() {
    this.#element.textContent = 'score: ' + this.#value
  }
}

export const score = new Score()
