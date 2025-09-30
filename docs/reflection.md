# Reflection on Code Quality and My Refactoring

When I started this project, my input handling looked very different. I used global variables and many repeated if statements inside event listeners. My main function for movement was around 168 lines of code.

## Why did I do this?

Two main reasons:

1. Lack of coding knowledge
2. Lack of understanding of code quality

The code worked and I understood it, but the problems started when I read Clean Code and when I talked to my professor, Daniel Toll. That's when I realized my code was difficult to maintain, hard to extend, and confusing for other developers.

So I started to refactor everything into classes and added some object-oriented principles like encapsulation.

## Example 1: Input Handling Refactoring

### Before

```javascript
let isMovingLeft = false
let isMovingRight = false
let isMovingUp = false
let isMovingDown = false
let playerIsJumping = false
let verticalVelocity = 0

viewport.addEventListener('keydown', e => {
  const key = e.key.toLowerCase()
  if (settings.controlScheme === 'wasd') {
    if (key === 'a') isMovingLeft = true
    if (key === 'd') isMovingRight = true
    if (key === 'w') isMovingUp = true
    if (key === 's') isMovingDown = true
  } else if (settings.controlScheme === 'platform') {
    if (key === 'a') isMovingLeft = true
    if (key === 'd') isMovingRight = true
    if (key === ' ' && !playerIsJumping) {
      playerIsJumping = true
      verticalVelocity = -settings.jumpForce
    }
  }
})
```

### After

```javascript
export class PlayerInput {
  #scheme
  #left = false
  #right = false
  #up = false
  #down = false
  #jump = false

  constructor(scheme = 'wasd') {
    this.#scheme = scheme
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  // Encapsulation of scheme (hide string comparison)
  playerIsUsingWASD() {
    return this.#scheme === 'wasd'
  }

  playerIsUsingPlatform() {
    return this.#scheme === 'platform'
  }

  handleKeyDown(event) {
    const key = event.key.toLowerCase()
    if (this.playerIsUsingWASD()) {
      if (key === 'a') this.#left = true
      if (key === 'd') this.#right = true
      if (key === 's') this.#down = true
      if (key === 'w') this.#up = true
      if (key === ' ') this.#jump = true
    } else if (this.playerIsUsingPlatform()) {
      if (key === 'a') this.#left = true
      if (key === 'd') this.#right = true
      if (key === ' ') this.#jump = true
    }
  }

  handleKeyUp(event) {
    const key = event.key.toLowerCase()
    if (this.playerIsUsingWASD()) {
      if (key === 'a') this.#left = false
      if (key === 'd') this.#right = false
      if (key === 's') this.#down = false
      if (key === 'w') this.#up = false
      if (key === ' ') this.#jump = false
    } else if (this.playerIsUsingPlatform()) {
      if (key === 'a') this.#left = false
      if (key === 'd') this.#right = false
      if (key === ' ') this.#jump = false
    }
  }

  // Query methods
  playerWantsToGoLeft()  { return this.#left }
  playerWantsToGoRight() { return this.#right }
  playerWantsToGoUp()    { return this.#up }
  playerWantsToGoDown()  { return this.#down }
  playerWantsToJump()    { return this.#jump }

  get controlScheme() { return this.#scheme }
}
```

### Benefits of this refactoring

- **Encapsulation:** Input state is hidden inside a class
- **Readability:** Instead of many booleans floating around, I can now call `playerInput.left` or use query methods
- **Reusability:** The input handler can be reused in different games or extended with new schemes
- **Maintainability:** Easier to add new features or debug, since input logic is isolated from the game loop

## Example 2: GameElement Class

Another example of my refactoring was how I replaced a simple helper function `createGameElement` with a proper `GameElement` class. In the old version, every element was just a div with inline styles, and I had to manage position manually with global logic.

### Before

```javascript
export function createGameElement(options = {}) {
  const element = document.createElement('div')
  element.style.position = 'absolute'
  element.style.width = (options.width || 60) + 'px'
  element.style.height = (options.height || 60) + 'px'
  element.style.left = (options.x || 100) + 'px'
  element.style.top = (options.y || 100) + 'px'

  if (options.image) {
    element.style.backgroundImage = `url(${options.image})`
    element.style.backgroundSize = 'cover'
  } else {
    element.style.backgroundColor = options.color || 'black'
  }

  document.body.appendChild(element)
  return element
}
```

### After

```javascript
export class GameElement {
  constructor({ positionX = 0, positionY = 0, elementWidth = 50, elementHeight = 50, backgroundColor = 'blue' } = {}) {
    this.positionX = positionX
    this.positionY = positionY
    this.elementWidth = elementWidth
    this.elementHeight = elementHeight

    this.htmlElement = document.createElement('div')
    this.htmlElement.style.position = 'absolute'
    this.htmlElement.style.background = backgroundColor
    this.updatePosition()

    this.htmlElement.style.width = this.elementWidth + 'px'
    this.htmlElement.style.height = this.elementHeight + 'px'

    document.body.appendChild(this.htmlElement)
  }

  updatePosition() {
    this.htmlElement.style.left = this.positionX + 'px'
    this.htmlElement.style.top = this.positionY + 'px'
  }

  getBounds() {
    return {
      left: this.positionX,
      top: this.positionY,
      right: this.positionX + this.elementWidth,
      bottom: this.positionY + this.elementHeight
    }
  }

  remove() {
    this.htmlElement.remove()
  }
}
```

### Benefits of this change

- **Encapsulation:** Each element knows its own size, position, and DOM node
- **Methods:** `updatePosition()`, `getBounds()`, and `remove()` give a clear API
- **Reusability:** `GameElement` is now the base for Player, Obstacle, Coin, etc.
- **Cleaner collisions:** Colliders can just call `getBounds()` instead of re-reading DOM styles

## Clean Code Analysis – Chapter 2

| Name | Explanation | Reflection and Clean Code Rules |
|------|-------------|----------------------------------|
| `Game` | Main class that starts the game and handles animation, input, and collisions. | **Class Names:** Clear, short, a noun. **Intention-Revealing:** communicates purpose, but it might be too generic. A name like `PlatformGame` would be more specific to what kind of game it is. |
| `SceneManager` | Class that manages scenes, progression, and resets of objects. | **Intention-Revealing Names:** Good, easy to understand that it manages scenes. **Avoid Disinformation:** not misleading. Could potentially be shorter, but I think the current name is descriptive. |
| `playerWantsToGoLeft()` | Method in `PlayerInput` that returns a boolean if the player presses left. | **Method Names:** Starts with a verb, phrased as a question – good for booleans. **Don't be Cute:** not abbreviated or cryptic. A little long, but clarity is more important than shortness. |
| `Score` / `score` | `Score` is the class, `score` is the global singleton instance. | **Meaningful Distinctions:** Having both `Score` and `score` can confuse users. Could improve by only exporting the singleton or renaming it `gameScore` so the difference is clearer. |
| `AABBCollider.resolvePlayerVsObstacles(player)` | Method that resolves collisions between the player and obstacles. | **Technical terms:** "AABB" (Axis-Aligned Bounding Box) is correct for advanced users, but might be confusing for beginners. A simpler name like `CollisionHandler` would be easier to understand. **Method Names:** `resolve…` is a good verb, but the method does several things at once. |

## Reflection on Chapter 2 (Naming)

While reading Chapter 2 of *Clean Code*, I realized that most of my names are clear and intention-revealing, but some could still be improved. For example, using both `Score` and `score` can confuse developers, and `AABBCollider` might be unnecessarily technical for the beginners that this module is aimed at.

The chapter highlights that names should be meaningful, consistent, and pronounceable. I think my naming is mostly successful in `SceneManager` and `playerWantsToGoLeft()`, but I can see opportunities to simplify the API and make it more beginner-friendly. If I continue developing this module, I would refactor some class and method names to better communicate their purpose.

## Functions Table (Clean Code – Chapter 3)

| Method | Lines (approx) | Reflection |
|--------|----------------|------------|
| `Menu.create(...)` | ~37 | **Do One Thing:** This function does multiple things: removes old menus, builds DOM elements, styles them, and attaches events. It could be split into smaller helpers like `createTitle()`, `createButtons()`, and `applyStyles()`. |
| `AABBCollider.resolvePlayerVsObstacles(player)` | ~26 | **Do One Thing:** Handles too many cases at once (ground collision, ceiling, walls). Could be split into separate methods for each type of collision. **One Level of Abstraction:** mixes geometry math with state updates. |
| `Game.animate()` | ~14 | **Command Query Separation:** Mixes commands (update player position) with queries (check input states). Could be refactored into smaller functions for clarity. Still short enough to read, but not "one thing." |
| `PlayerInput.handleKeyDown()` | ~12 | **Duplication:** Similar logic repeated in `handleKeyUp()`. Could be refactored by mapping keys to actions. **Small:** each branch is fine, but repetition hurts readability. |
| `SceneManager.set(index)` | ~10 | **Do One Thing:** It clears obstacles, clears coins, resets the score, sets index, and runs the scene. Could be refactored into smaller helper functions like `clearWorld()` and `resetScore()`. |

## Reflection on Chapter 3 (Functions)

Chapter 3 shows how important it is to keep functions small and focused. I can see that some of my methods try to handle too many tasks at once, especially `Menu.create()` and `AABBCollider.resolvePlayerVsObstacles()`. Splitting these into smaller functions would make the code easier to read, test, and maintain.

At the same time, I also learned that clarity is more important than just chasing the "smallest possible function." For example, `Game.animate()` works well even though it mixes a few concerns, because the game loop itself needs to coordinate many parts. I think a balance is necessary: small functions for details, but some slightly larger functions for coordination.

## Reflection on My Own Code Quality

Overall, I am happy that my module has a clear public interface with classes like `Game`, `SceneManager`, `Score`, and `PlayerInput`. These make it easy for other programmers to use the library without looking inside the implementation. I also followed the principle of encapsulation with private fields and query methods, which improves safety and readability.

However, I also see clear areas for improvement. The biggest issues are duplication (in PlayerInput.handleKeyDown / handleKeyUp), overly long functions (Menu.create), and technical names (AABBCollider) that may not fit the learning focus of the module. If I had more time, I would refactor these parts to follow Clean Code practices more closely. Since I see this module as a learning tool for younger individuals, I would be more than happy to put in the extra effort to make it easier to understand. My goal is for beginners to quickly get started with 2D game development and be able to create their own games in a fun and accessible way.

The main lesson I take away is that writing code for other developers requires extra attention to clarity, naming, and structure. Even if the code “works,” its readability and usability matter just as much when building a reusable module. This has been extremely challenging for me as a student, because I am limited by the knowledge I currently have. Refactoring everything after my talk with my professor was both fun and very hard. At times it was frustrating, but I also felt like I was truly becoming a programmer. I had to think logically, experiment, and carefully consider how to write my code. Since I don’t know all the syntax yet, it was a big challenge — but one that taught me a lot. Thanks to my professor’s feedback, I experienced both joy and irritation during the refactoring process, and that mix of emotions helped me grow as a developer. :D 

https://github.com/Liberaa/module 