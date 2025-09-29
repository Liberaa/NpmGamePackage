import { score } from './score.js'

export class Menu {
  #element = null

  create({ title = 'Game Menu', buttons } = {}) {
    if (this.#element) this.#element.remove()

    this.#element = document.createElement('div')
    this.#element.style.position = 'fixed'
    this.#element.style.top = '0'
    this.#element.style.left = '0'
    this.#element.style.width = '100%'
    this.#element.style.height = '100%'
    this.#element.style.background = 'rgba(0,0,0,0.7)'
    this.#element.style.display = 'flex'
    this.#element.style.flexDirection = 'column'
    this.#element.style.justifyContent = 'center'
    this.#element.style.alignItems = 'center'
    this.#element.style.zIndex = '1000'

    const titleEl = document.createElement('h1')
    titleEl.textContent = title
    titleEl.style.color = 'white'
    titleEl.style.marginBottom = '20px'
    this.#element.appendChild(titleEl)

    const defaultButtons = [
      { text: 'Restart', onClick: () => window.location.reload() },
      { text: 'Reset Score', onClick: () => score.reset() },
      { text: 'Close', onClick: () => this.close() }
    ]

    const allButtons = buttons && buttons.length ? buttons : defaultButtons

    for (const btn of allButtons) {
      const button = document.createElement('button')
      button.textContent = btn.text
      button.style.margin = '10px'
      button.style.padding = '10px 20px'
      button.style.fontSize = '18px'
      button.style.cursor = 'pointer'
      button.style.borderRadius = '8px'
      button.style.border = 'none'
      button.addEventListener('click', btn.onClick)
      this.#element.appendChild(button)
    }

    document.body.appendChild(this.#element)
  }

  close() {
    if (this.#element) {
      this.#element.remove()
      this.#element = null
    }
  }
}
