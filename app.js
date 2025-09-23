import { MoveDiv } from "./index.js";
import { Obstacle } from "./obstacle.js";




MoveDiv({ controlscheme: 'wasd'
})


Obstacle({
  x: 500,
  y: 200,
  width: 80,
  height: 80,
  color: 'red',
  rounded: true, 
  border: '3px solid black',
  opacity: 0.8,
  rotate: 15,
  zIndex: 10,
})