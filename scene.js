// scene.js
import { obstacles, coins } from "./obstacle.js"
import { resetScore } from "./score.js"

let scenes = []
let currentSceneIndex = 0

export function addScene(sceneFn) {
    scenes.push(sceneFn)
}

export function setScene(index) {
    if (index < 0 || index >= scenes.length) return

    for (const obj of obstacles) {
        if (obj.obstacle) obj.obstacle.remove()
    }
    obstacles.length = 0

    for (const coin of coins) {
        if (coin.element) coin.element.remove()
    }
    coins.length = 0

    currentSceneIndex = index
    resetScore()
    scenes[currentSceneIndex]()
}

export function nextScene() {
    if (currentSceneIndex + 1 < scenes.length) {
        setScene(currentSceneIndex + 1)
    } else {
        console.log("No more scenes")
    }
}

export function getCurrentSceneIndex() {
    return currentSceneIndex
}
