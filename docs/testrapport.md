# Test Report – Module
# https://github.com/Liberaa/module Final Version
# https://github.com/Liberaa/NpmGamePackage Test Version
## Test Method

All tests were performed manually using the provided test application (`test.js` + `RunWithGoLive.html`).

The test app uses the module (`Game`, `SceneManager`, `Obstacle`, `Coin`, `Menu`, `Score`) to build multiple levels with obstacles, coins, and score system.

### Testing was done by:

- Starting the game with different control schemes (`'wasd'`, `'platform'`)
- Playing through the levels, observing movement, collisions, score updates, and camera
- Interacting with the menu (M key)
- Inspecting DOM changes in browser Developer Tools
- Using the console to call some public methods (`score.increase()`, `SceneManager.set()`, `GameElement.getBounds()`)

**Browsers used:** Chrome on Windows 11

## Test Cases

| What was tested | How it was tested | Result |
|-----------------|-------------------|--------|
| WASD movement | Started game with `'wasd'` control scheme. Pressed W, A, S, D. Observed player moving up, left, down, right. | ✅ Worked as expected. |
| Platform movement | Started game with `'platform'` scheme. Pressed A, D to walk, Space to jump. Observed correct left/right walking and jumping. | ✅ Worked as expected. |
| Jump reset after landing | Jumped onto ground, then pressed Space again. Observed that new jump only worked after landing. | ✅ Worked correctly. |
| Rapid Space presses (double jump bug) | In platform mode, spammed Space while in the air. Expected: no extra jumps. Actual: sometimes multiple mid-air jumps occur. | ❌ Bug – double jump possible with spam. |
| Game loop position updates | Held down D key in `'wasd'` scheme. Player continuously moved right across screen. | ✅ Smooth, continuous updates. |
| Gravity and ground landing | Jumped in platform mode, released key. Observed fall back to ground at correct height. | ✅ Gravity applied and landing worked. |
| Collision with obstacle (top landing) | Jumped on obstacle in Scene 1. Expected player to land on top surface. | ✅ Landed on obstacle as expected. |
| Collision with obstacle (ceiling) | Jumped into obstacle placed above. Expected stop at bottom of obstacle. | ✅ Player stopped correctly. |
| Collision with multiple obstacles | Walked across 3 stacked obstacles in Scene 7. Observed smooth landings between them. | ✅ Worked correctly. |
| Coin pickup and score increase | Collected coin in Scene 1. Checked score value on HUD. | ✅ Score increased by 1 per coin. |
| Score manual increase | In console: `score.increase(10)` then `score.getValue()`. | ✅ Score increased by 10. |
| Score reset | Increased score, then pressed "Reset Score" in pause menu. Checked HUD. | ✅ Score returned to 0. |
| Scene progression by score | Collected all coins in Scene 1 until target (20 points). Verified automatic load of Scene 2. | ✅ Next scene loaded automatically. |
| SceneManager manual set | In console: `scenes.set(3)`. Observed old objects cleared, Scene 3 loaded. | ✅ Reset worked correctly. |
| Menu open/close | Pressed "M". Menu appeared with title and buttons. Chose "Close Menu". Menu disappeared. | ✅ Worked correctly. |
| Menu actions – Next Scene | Pressed "M", clicked "Next Scene". Verified next scene loaded. | ✅ Worked correctly. |
| Menu actions – Reset Scene | Collected coins, then clicked "Reset Scene". Scene restarted with coins reset. | ✅ Worked correctly. |
| Menu actions – Reset Score | Increased score, clicked "Reset Score". HUD showed 0. | ✅ Worked correctly. |
| Menu overlap bug | Opened menu, then triggered scene change via score. Menu stayed visible over new scene. | ❌ Bug – menu not reset on scene change. |
| GameElement updatePosition() | Created element at (100,100), changed `.positionX=200`, called `.updatePosition()`. Observed DOM updated. | ✅ Worked correctly. |
| GameElement getBounds() | Created element (50,50, size 100x100). Called `.getBounds()`. | ✅ Returned `{left:50, top:50, right:150, bottom:150}`. |
| GameElement remove() | Created element, called `.remove()`. Verified DOM removal. | ✅ Element removed from document. |
| Camera follow | Set world width=2000. Walked across world in platform mode. Camera followed player, keeping them centered. | ✅ Worked as expected. |
| Camera modes | Tested "horizontal", "vertical", "none". Verified camera only followed in specified axis or stayed fixed. | ✅ All modes worked. |
| Win condition (Scene 10) | Progressed through all scenes by collecting coins. Observed win message "YOU WIN!". | ✅ Final scene displayed correctly. |

## Summary

**Total tests:** 25  
**Passed:** 23  
**Failed:** 2

### Passed

- Player movement (wasd and platform)
- Jump, gravity, collisions with obstacles and coins
- Score increase and reset
- Scene progression (automatic + manual)
- Menu actions (open, close, next scene, reset scene, reset score)
- Camera follow and camera modes
- GameElement creation, updating, bounds, and removal
- Win condition screen

### Failed

- **Double jump bug** – in platform mode, spamming Space can sometimes trigger mid-air jumps
- **Menu overlap bug** – if menu is open during scene change, it persists and overlaps new scene

## Reflection

Manual testing with the test app gave a realistic view of the module's functionality in practice. Most features behaved as expected, but testing also revealed edge cases (double jump and menu overlap) that would be easy to miss without focused experiments.

The structure of the module made it possible to test multiple levels

- **High-level** (full game via test.js)
- **Mid-level** (SceneManager, Score, Menu)
- **Low-level** (GameElement methods)

For future improvements, I would add automated unit tests for input handling and scene transitions, because these are the most error areas. Automated tests would help catch regressions faster than manual testing..

Overall, the module is stable, reusable, and functional, with minor bugs to be fixed.