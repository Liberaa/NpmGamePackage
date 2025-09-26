# 2D Game Library

A lightweight, beginner-friendly JavaScript library for learning 2D game development in the browser. Perfect for students, educators, and anyone wanting to understand game programming fundamentals without the complexity of heavy game engines.

## Features

- **Simple Player Movement** - WASD controls or platformer physics
- **Collision Detection** - AABB collision system with obstacles
- **Score System** - Built-in scoring with UI display
- **Scene Management** - Multiple levels/scenes support
- **Menu System** - Pause menus and game UI
- **Collectibles** - Coin/value collection system
- **No Dependencies** - Pure JavaScript, works in any modern browser

## Installation

```bash
npm install your-2d-game-lib
```

Or use it directly with ES6 modules:

```javascript
import {
  MoveDiv,
  Obstacle,
  value,
  ScoreDisplay,
  resetScore,
  getScore,
  addScene,
  setScene,
  nextScene,
  createMenu,
  closeMenu
} from "your-2d-game-lib"
```

## Quick Start

Create an `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First 2D Game</title>
    <style>body { margin: 0; background: #333; }</style>
</head>
<script type="module" src="game.js"></script>
</html>
```

Create a `game.js` file:

```javascript
import { MoveDiv, Obstacle, value, ScoreDisplay, addScene, setScene } from "your-2d-game-lib"

// Create score display and player
ScoreDisplay()
MoveDiv({ controlscheme: "platform" })

// Create first scene
addScene(() => {
  Obstacle({ x: 100, y: 600, width: 800, height: 80, color: "brown" })
  Obstacle({ x: 400, y: 400, width: 200, height: 20, color: "green" })
  
  value({ x: 300, y: 550 })
  value({ x: 500, y: 350 })
})

setScene(0)
```

## API Reference

### Player Movement

```javascript
MoveDiv(options)
```

**Options:**
- `controlscheme`: `"wasd"` or `"platform"` (default: "wasd")
- `color`: Player color (default: varies)
- `image`: Background image URL
- `speed`: Movement speed (default: 15)
- `jump`: Jump strength for platformer (default: 15)
- `gravity`: Gravity strength (default: 0.3)
- `ground`: Ground level Y position (default: 900)

**Examples:**

```javascript
// WASD movement
MoveDiv({ controlscheme: "wasd", color: "red" })

// Platformer with custom physics
MoveDiv({ controlscheme: "platform", jump: 20, gravity: 0.4 })
```

### Obstacles

```javascript
Obstacle(options)
```

Create solid platforms and walls that the player collides with.

```javascript
// Basic platform
Obstacle({ x: 200, y: 500, width: 300, height: 50, color: "brown" })

// Colored obstacle
Obstacle({ x: 100, y: 200, width: 80, height: 80, color: "red" })
```

### Collectibles

```javascript
value(options)
```

Create coins or items that give points when collected.

```javascript
// Default gold coin (10 points)
value({ x: 300, y: 200 })

// Custom collectible
value({ x: 500, y: 150, width: 40, height: 40 })
```

### Score System

```javascript
// Display score UI
ScoreDisplay()

// Get current score
const currentScore = getScore()

// Add points manually
addScore(50)

// Reset score to 0
resetScore()
```

### Scene Management

```javascript
// Add a new scene/level
addScene(() => {
  // Place obstacles and collectibles here
  Obstacle({ x: 100, y: 500, width: 200, height: 50, color: "blue" })
  value({ x: 150, y: 450 })
})

// Switch to scene by index
setScene(0) // First scene

// Go to next scene
nextScene()

// Get current scene index
const currentScene = getCurrentSceneIndex()
```

### Menu System

```javascript
// Create a pause menu
createMenu({
  title: "Game Paused",
  buttons: [
    { text: "Resume", onClick: () => closeMenu() },
    { text: "Restart", onClick: () => window.location.reload() },
    { text: "Main Menu", onClick: () => setScene(0) }
  ]
})

// Close any open menu
closeMenu()
```

## Complete Game Example

```javascript
import {
  MoveDiv, Obstacle, value, ScoreDisplay,
  addScene, setScene, nextScene, getScore, createMenu, closeMenu
} from "your-2d-game-lib"

// Initialize
ScoreDisplay()
MoveDiv({ controlscheme: "platform" })

// Level 1
addScene(() => {
  Obstacle({ x: 100, y: 600, width: 800, height: 80, color: "brown" })
  Obstacle({ x: 400, y: 450, width: 150, height: 20, color: "green" })
  value({ x: 200, y: 550 })
  value({ x: 450, y: 400 })
})

// Level 2
addScene(() => {
  Obstacle({ x: 50, y: 650, width: 200, height: 50, color: "brown" })
  Obstacle({ x: 350, y: 500, width: 100, height: 20, color: "green" })
  Obstacle({ x: 600, y: 350, width: 100, height: 20, color: "green" })
  value({ x: 375, y: 450 })
  value({ x: 625, y: 300 })
})

setScene(0)

// Auto-advance levels
setInterval(() => {
  if (getScore() >= 20) nextScene()
}, 1000)

// Pause menu (Press 'P')
document.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    createMenu({
      title: "Paused",
      buttons: [
        { text: "Resume", onClick: () => closeMenu() },
        { text: "Restart", onClick: () => window.location.reload() }
      ]
    })
  }
})
```

## Contributing

This is an educational project! Feel free to:
- Report bugs
- Suggest features
- Submit improvements
- Create example games

## License

MIT License - Perfect for learning and educational use!

## Why This Library?

- **Learning Focused**: Understand game development step by step
- **No Magic**: Simple, readable code you can modify
- **Immediate Results**: See your game running in minutes
- **Foundation Building**: Learn concepts applicable to larger engines
- **Browser Native**: No complex setup or build tools required

Start building your first 2D game today!
