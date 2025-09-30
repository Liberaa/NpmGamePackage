# learn2dgame-js

beginner-friendly JavaScript library for learning 2D game development in the browser. Perfect for students, educators, and anyone wanting to learn javascript game development (Beginner Friendly).

## Link To Final Version : https://github.com/Liberaa/module 
## Link To Working repository : https://github.com/Liberaa/NpmGamePackage 

# Features

- **Simple Player Movement** - WASD controls or platformer physics
- **Collision Detection** - AABB collision system with obstacles
- **Score System** - Built-in scoring with UI display
- **Scene Management** - Multiple levels/scenes support
- **Menu System** - Pause menus and game UI
- **Collectibles** - Coin collection system
- **No Dependencies** - Pure JavaScript, works in any modern browser

## Installation

```bash
npm install learn2dgame-js
```

### Option 1: With Vite (Recommended)

```bash
npm create vite@latest my-game -- --template vanilla
cd my-game
npm install learn2dgame-js
```

```javascript
import { Game, Obstacle, Coin, SceneManager, Menu, score } from 'learn2dgame-js'
```

### Option 2: Without a Build Tool

```bash
npm install learn2dgame-js
```

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Game</title>
</head>
<body>
    <script type="module" src="index.js"></script>
</body>
</html>
```

In `index.js`:

```javascript
import { Game, Obstacle, Coin, SceneManager, Menu, score } from './node_modules/learn2dgame-js/dist/learn2dgame-js.js'
```

Open with **Live Server** (VS Code extension) or any local development server.

## Quick Start

```javascript
import { Game, Obstacle, Coin, SceneManager } from 'learn2dgame-js'

const scenes = new SceneManager()

function level1() {
  new Obstacle({ positionX: 200, positionY: 500, width: 400, height: 50, color: 'brown' })
  new Coin({ positionX: 300, positionY: 450 })
}

scenes.add(level1, 20)
scenes.set(0)

new Game('platform', {
  movementSpeed: 10,
  jumpStrengthValue: 15,
  color: 'blue'
})
```

**Controls:**
- **A** = Move left
- **D** = Move right  
- **Space** = Jump

## API Reference

### Game

```javascript
new Game(controlScheme, options)
```

**Parameters:**
- `controlScheme`: `'wasd'` or `'platform'`
- `options`:
  - `movementSpeed` (number): Player speed (default: 8)
  - `gravityForce` (number): Gravity for platform mode (default: 0.5)
  - `jumpStrengthValue` (number): Jump power (default: 12)
  - `color` (string): Player color (default: 'red')

### Obstacle

```javascript
new Obstacle({ positionX, positionY, width, height, color, border })
```

Creates a platform or wall.

### Coin

```javascript
new Coin({ positionX, positionY, size })
```

Creates a collectible coin (worth 10 points).

### SceneManager

```javascript
const scenes = new SceneManager()
scenes.add(sceneFn, targetScore)  // Register scene
scenes.set(index)                 // Load scene
scenes.next()                     // Next scene
```

### Score

```javascript
import { score } from 'learn2dgame-js'

score.add(points)     // Add points
score.reset()         // Reset to 0
score.value           // Current score
```

### Menu

```javascript
const menu = new Menu()

menu.create({
  title: 'Pause Menu',
  buttons: [
    { text: 'Resume', onClick: () => menu.close() }
  ]
})

menu.close()
```

## Examples

### Multi-Level Game

```javascript
import { Game, Obstacle, Coin, SceneManager } from 'learn2dgame-js'

const scenes = new SceneManager()

function level1() {
  new Obstacle({ positionX: 200, positionY: 500, width: 300, height: 50, color: 'brown' })
  new Coin({ positionX: 300, positionY: 450 })
}

function level2() {
  new Obstacle({ positionX: 100, positionY: 500, width: 150, height: 50, color: 'green' })
  new Obstacle({ positionX: 350, positionY: 400, width: 150, height: 50, color: 'green' })
  new Coin({ positionX: 400, positionY: 350 })
}

scenes.add(level1, 20)
scenes.add(level2, 20)
scenes.set(0)

new Game('platform', {
    jumpStrengthValue: 50
})
```

### Pause Menu

```javascript
import { Menu, score } from 'learn2dgame-js'

const menu = new Menu()

document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'm') {
    menu.create({
      title: 'Pause',
      buttons: [
        { text: 'Resume', onClick: () => menu.close() },
        { text: 'Reset Score', onClick: () => score.reset() }
      ]
    })
  }
})
```

### Level Design Tips

**Easy staircase:**
```javascript
new Obstacle({ positionX: 100, positionY: 500, width: 150, height: 50 })
new Obstacle({ positionX: 250, positionY: 450, width: 150, height: 50 })
new Obstacle({ positionX: 400, positionY: 400, width: 150, height: 50 })
```

**Gap jumping:**
```javascript
new Obstacle({ positionX: 100, positionY: 500, width: 150, height: 50 })
new Obstacle({ positionX: 350, positionY: 500, width: 150, height: 50 })
```

### WASD (Top-Down) Mode

```javascript
new Game('wasd', { movementSpeed: 5 })
```


## Known Issues

- **Double jump bug**: Spamming Space can trigger mid-air jumps
- **Menu overlap**: Menu persists if open during scene change

## Contributing

This is an educational project and contributions are welcome!

### How to Contribute

1. **Report Bugs**: Found an issue? [Create a bug report](https://github.com/learn2dgame-js/issues/new)
2. **Suggest Features**: Have ideas? [Open a feature request](https://github.com/learn2dgame-js/issues/new)
3. **Submit Code**: Fork the repo, make your changes, and submit a pull request
4. **Share Examples**: Create example games and share them with the community

## License

MIT License - Perfect for learning and educational use!
https://github.com/Liberaa/NpmGamePackage/blob/main/LICENSE 

## Why This Library :P ?

- **Learning Focused**: Understand game development step by step
- **No Complex Setup**: Just JavaScript and a browser
- **Simple Code**: Readable, modifiable source code
- **Quick Results**: Working game in minutes
- **Foundation Building**: Learn concepts for larger projects

# Want more Documentasion?
## https://github.com/Liberaa/NpmGamePackage/blob/main/test/test.js 