export class ScoreSystem {
  constructor() {
    this.currentScoreValue = 0

    this.scoreDisplayElement = document.createElement('div')
    this.scoreDisplayElement.style.position = 'fixed'
    this.scoreDisplayElement.style.top = '10px'
    this.scoreDisplayElement.style.left = '10px'
    this.scoreDisplayElement.style.color = 'white'
    this.scoreDisplayElement.style.fontSize = '18px'
    this.scoreDisplayElement.style.fontFamily = 'arial'
    this.scoreDisplayElement.style.background = 'gray'
    this.scoreDisplayElement.style.padding = '5px 10px'
    this.scoreDisplayElement.style.borderRadius = '15px'
    document.body.appendChild(this.scoreDisplayElement)

    this.updateScoreDisplay()
  }

  addAmountToScore(amount = 1) {
    this.currentScoreValue += amount
    this.updateScoreDisplay()
  }

  resetScore() {
    this.currentScoreValue = 0
    this.updateScoreDisplay()
  }

  updateScoreDisplay() {
    this.scoreDisplayElement.textContent = 'Score: ' + this.currentScoreValue
  }
}
