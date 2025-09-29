// test.js


import {
  Game,
  Obstacle,
  Coin,
  SceneManager,
  Menu,
  score
} from './index.js'

// Scene Manager
const scenes = new SceneManager()

// Scene Definitions
function sceneOne() {
  new Obstacle({ positionX: 200, positionY: 500, width: 200, height: 50, color: 'brown' })
  new Coin({ positionX: 250, positionY: 450 })
  new Coin({ positionX: 350, positionY: 450 })
}

function sceneTwo() {
  new Obstacle({ positionX: 400, positionY: 450, width: 180, height: 50, color: 'green' })
  new Obstacle({ positionX: 600, positionY: 350, width: 150, height: 50, color: 'blue' })
  new Coin({ positionX: 450, positionY: 400 })
  new Coin({ positionX: 650, positionY: 300 })
}

function sceneThree() {
  new Obstacle({ positionX: 100, positionY: 400, width: 250, height: 50, color: 'purple' })
  new Obstacle({ positionX: 500, positionY: 300, width: 200, height: 50, color: 'orange' })
  new Coin({ positionX: 150, positionY: 350 })
  new Coin({ positionX: 550, positionY: 250 })
}

function sceneFour() {
  new Obstacle({ positionX: 300, positionY: 500, width: 180, height: 50, color: 'teal' })
  new Obstacle({ positionX: 700, positionY: 400, width: 180, height: 50, color: 'red' })
  new Obstacle({ positionX: 500, positionY: 250, width: 100, height: 50, color: 'navy' })
  new Coin({ positionX: 320, positionY: 450 })
  new Coin({ positionX: 720, positionY: 350 })
}

function sceneFive() {
  new Obstacle({ positionX: 150, positionY: 500, width: 200, height: 50, color: 'pink' })
  new Obstacle({ positionX: 450, positionY: 350, width: 180, height: 50, color: 'gray' })
  new Obstacle({ positionX: 700, positionY: 250, width: 150, height: 50, color: 'gold' })
  new Coin({ positionX: 180, positionY: 450 })
  new Coin({ positionX: 480, positionY: 300 })
  new Coin({ positionX: 730, positionY: 200 })
}

function sceneSix() {
  new Obstacle({ positionX: 100, positionY: 550, width: 180, height: 50, color: 'cyan' })
  new Obstacle({ positionX: 350, positionY: 420, width: 160, height: 50, color: 'lime' })
  new Obstacle({ positionX: 600, positionY: 300, width: 140, height: 50, color: 'maroon' })
  new Coin({ positionX: 120, positionY: 500 })
  new Coin({ positionX: 370, positionY: 370 })
  new Coin({ positionX: 620, positionY: 250 })
}

function sceneSeven() {
  new Obstacle({ positionX: 200, positionY: 500, width: 150, height: 50, color: 'blue' })
  new Obstacle({ positionX: 400, positionY: 400, width: 150, height: 50, color: 'purple' })
  new Obstacle({ positionX: 600, positionY: 300, width: 150, height: 50, color: 'brown' })
  new Obstacle({ positionX: 800, positionY: 200, width: 150, height: 50, color: 'orange' })
  new Coin({ positionX: 220, positionY: 450 })
  new Coin({ positionX: 420, positionY: 350 })
  new Coin({ positionX: 620, positionY: 250 })
  new Coin({ positionX: 820, positionY: 150 })
}

function sceneEight() {
  new Obstacle({ positionX: 100, positionY: 500, width: 100, height: 50, color: 'red' })
  new Obstacle({ positionX: 250, positionY: 400, width: 100, height: 50, color: 'yellow' })
  new Obstacle({ positionX: 400, positionY: 300, width: 100, height: 50, color: 'blue' })
  new Obstacle({ positionX: 550, positionY: 200, width: 100, height: 50, color: 'green' })
  new Coin({ positionX: 120, positionY: 450 })
  new Coin({ positionX: 270, positionY: 350 })
  new Coin({ positionX: 420, positionY: 250 })
  new Coin({ positionX: 570, positionY: 150 })
}

function sceneNine() {
  new Obstacle({ positionX: 150, positionY: 550, width: 120, height: 50, color: 'teal' })
  new Obstacle({ positionX: 350, positionY: 450, width: 120, height: 50, color: 'navy' })
  new Obstacle({ positionX: 550, positionY: 350, width: 120, height: 50, color: 'olive' })
  new Obstacle({ positionX: 750, positionY: 250, width: 120, height: 50, color: 'brown' })
  new Coin({ positionX: 170, positionY: 500 })
  new Coin({ positionX: 370, positionY: 400 })
  new Coin({ positionX: 570, positionY: 300 })
  new Coin({ positionX: 770, positionY: 200 })
}

function sceneTen() {
  const text = document.createElement('h1')
  text.textContent = '🎉 YOU WIN! 🎉'
  text.style.position = 'absolute'
  text.style.top = '40%'
  text.style.left = '50%'
  text.style.transform = 'translate(-50%, -50%)'
  text.style.color = 'white'
  text.style.fontFamily = 'sans-serif'
  document.body.appendChild(text)
}

// Register all scenes with score targets
scenes.add(sceneOne, 20)
scenes.add(sceneTwo, 20)
scenes.add(sceneThree, 20)
scenes.add(sceneFour, 20)
scenes.add(sceneFive, 20)
scenes.add(sceneSix, 20)
scenes.add(sceneSeven, 40)
scenes.add(sceneEight, 40)
scenes.add(sceneNine, 50)
scenes.add(sceneTen, null)

// Start at first scene
scenes.set(0)

// Start the Game
new Game('wasd', {
  movementSpeed: 12,
  gravityForce: 0.6,
  jumpStrengthValue: 50,
  color: 'blue'
})

// Menu system (press "M")
const menu = new Menu()
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'm') {
    menu.create({
      title: 'Pause Menu',
      buttons: [
        { text: 'Next Scene', onClick: () => scenes.next() },
        { text: 'Reset Scene', onClick: () => scenes.set(scenes.index) },
        { text: 'Reset Score', onClick: () => score.reset() },
        { text: 'Close Menu', onClick: () => menu.close() }
      ]
    })
  }
})
