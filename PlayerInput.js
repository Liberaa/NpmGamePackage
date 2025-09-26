class playerInput {
    constructor() {
        this.controlScheme = controlScheme
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        this.isJumping = false

        // listeners here?
        document.addEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (event) => {
        const key = event.key.toLowerCase()

        if (this.controlScheme === "wasd") {
            if (key === "a") this.left = true
            if (key === "d") this.right = true
            if (key === "s") this.down = true
            if (key === "w") this.up = true
            if (key === " ") this.isJumping = true
        } else if (this.controlScheme === "platform") {
            if (key === "a") this.left = true
            if (key === "d") this.right = true
            if (key === " " && !this.isJumping) {
                this.isJumping = true
            }
        }

    }

    handleKeyUp(event) {

    }
}