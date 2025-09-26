//app.js TEST FILE!!!!
import {
  MoveDiv,
  Obstacle,
  value,
  ScroreDisplay,
  resetScore,
  getScore,
  addScene,
  setScene,
  nextScene,
  createMenu,
  closeMenu
} from "./import.js"   // when testing locally


// ScroreDisplay()
MoveDiv({ controlscheme: "wasd" })

/*
addScene(() => {
  Obstacle({ x: 500, y: 200, width: 80, height: 80, color: "black", border: "3px solid white" })
  Obstacle({ x: 200, y: 200, width: 80, height: 80, color: "green", border: "3px solid white" })
  Obstacle({ x: 350, y: 400, width: 80, height: 80, color: "white", border: "3px solid white" })
  Obstacle({ x: 80, y: 600, width: 650, height: 80, color: "brown", border: "3px solid gold" })
  Obstacle({ x: 950, y: 800, width: 650, height: 80, color: "brown", border: "3px solid white" })

  value({ x: 300, y: 100 })
  value({ x: 600, y: 180 })
  value({ x: 1000, y: 750 })
})

addScene(() => {
  Obstacle({ x: 100, y: 500, width: 600, height: 80, color: "darkblue", border: "3px solid white" })
  Obstacle({ x: 200, y: 700, width: 600, height: 80, color: "darkblue", border: "3px solid white" })
  Obstacle({ x: 700, y: 400, width: 300, height: 80, color: "purple", border: "3px solid yellow" })

  value({ x: 200, y: 450 })
  value({ x: 400, y: 350 })
  value({ x: 600, y: 250 })
})

addScene(() => {
  Obstacle({ x: 150, y: 550, width: 500, height: 80, color: "red", border: "3px solid white" })
  Obstacle({ x: 800, y: 300, width: 200, height: 80, color: "orange", border: "3px solid black" })

  value({ x: 300, y: 480 })
  value({ x: 500, y: 380 })
  value({ x: 700, y: 280 })
})


addScene(() => {
  Obstacle({ x: 100, y: 600, width: 800, height: 80, color: "gray", border: "3px solid white" })
  Obstacle({ x: 400, y: 400, width: 250, height: 80, color: "pink", border: "3px solid purple" })

  value({ x: 250, y: 550 })
  value({ x: 450, y: 350 })
  value({ x: 650, y: 250 })
})

addScene(() => {
  Obstacle({ x: 500, y: 200, width: 80, height: 80, color: "black", border: "3px solid white" })
  Obstacle({ x: 200, y: 200, width: 80, height: 80, color: "green", border: "3px solid white" })
  Obstacle({ x: 350, y: 400, width: 80, height: 80, color: "white", border: "3px solid white" })
  Obstacle({ x: 80, y: 600, width: 650, height: 80, color: "brown", border: "3px solid gold" })
  Obstacle({ x: 950, y: 800, width: 650, height: 80, color: "brown", border: "3px solid white" })

  value({ x: 300, y: 100 })
  value({ x: 600, y: 180 })
  value({ x: 1000, y: 750 })
})


addScene(() => {
  Obstacle({ x: 500, y: 200, width: 80, height: 80, color: "black", border: "3px solid white" })
  Obstacle({ x: 200, y: 200, width: 80, height: 80, color: "green", border: "3px solid white" })
  Obstacle({ x: 350, y: 400, width: 80, height: 80, color: "white", border: "3px solid white" })
  Obstacle({ x: 80, y: 600, width: 650, height: 80, color: "brown", border: "3px solid gold" })
  Obstacle({ x: 1200, y: 900, width: 650, height: 80, color: "brown", border: "3px solid white" })

  value({ x: 100, y: 100 })
  value({ x: 600, y: 180 })
  value({ x: 1200, y: 800 })
})


addScene(() => {
  Obstacle({ x: 500, y: 200, width: 80, height: 80, color: "black", border: "3px solid white" })
  Obstacle({ x: 200, y: 200, width: 80, height: 80, color: "green", border: "3px solid white" })
  Obstacle({ x: 350, y: 400, width: 80, height: 80, color: "white", border: "3px solid white" })
  Obstacle({ x: 80, y: 600, width: 650, height: 80, color: "brown", border: "3px solid gold" })
  Obstacle({ x: 1500, y: 200, width: 650, height: 80, color: "brown", border: "3px solid white" })

  value({ x: 100, y: 100 })
  value({ x: 1700, y: 180 })
  value({ x: 1200, y: 800 })
  
})

setScene(0)

setInterval(() => {
  if (getScore() >= 30) {
    nextScene()
  }
}, 500)


document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "m") {
    createMenu({
      title: "Pause Menu",
      buttons: [
        { text: "Restart", onClick: () => window.location.reload() },
        { text: "Reset Score", onClick: () => resetScore() },
        { text: "Close", onClick: () => closeMenu() }
      ]
    })
  }
})
*/

