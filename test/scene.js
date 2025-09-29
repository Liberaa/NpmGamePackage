import { obstacles, coins } from './obstacle.js'
import { score } from './score.js'

export class SceneManager {
  #scenes = []
  #currentIndex = 0
  #targetScore = null

  constructor() {
    const existing = typeof window !== 'undefined' ? window.__sceneManager : null
    if (existing) return existing
    if (typeof window !== 'undefined') window.__sceneManager = this
  }

  add(sceneFn, targetScore = null) {
    this.#scenes.push({ fn: sceneFn, targetScore })
  }

  set(index) {
    if (index < 0 || index >= this.#scenes.length) return

    for (const obs of obstacles) obs.remove()
    obstacles.length = 0

    for (const coin of coins) coin.remove()
    coins.length = 0

    score.reset()

    this.#currentIndex = index
    const scene = this.#scenes[this.#currentIndex]
    this.#targetScore = scene.targetScore
    if (typeof scene.fn === 'function') scene.fn()
  }

  checkProgress() {
    if (this.#targetScore !== null && score.value >= this.#targetScore) {
      this.next()
    }
  }

  next() {
    if (this.#currentIndex + 1 < this.#scenes.length) {
      this.set(this.#currentIndex + 1)
    } else {
      console.log('No more scenes')
    }
  }

  get index() {
    return this.#currentIndex
  }
}
