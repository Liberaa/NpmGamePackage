export class PlayerInput {
    constructor(controlScheme = controlScheme){
        this.controlScheme = controlScheme
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        this.isJumping = false
// I need listeners 
        
    }
}