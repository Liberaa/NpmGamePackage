let scrore = 0
let scoreElement = null // scoreElement are nothing 

export function ScroreDisplay() {
    if(!scoreElement){ // if no score element we create one
        scoreElement = document.createElement('div')
        scoreElement.style.position = 'fixed'
        scoreElement.style.top = '10px'
        scoreElement.style.left = '10px'
        scoreElement.style.color = 'white'
        scoreElement.style.fontSize = '18px'
        scoreElement.style.fontFamily = 'arial'
        scoreElement.style.background = 'gray'
        scoreElement.style.padding = '5px 10px'
        scoreElement.style.borderRadius = '15px'

        document.body.appendChild(scoreElement)
    }

    updateScore() // make sure it shows "score: 0" at start
}

function updateScore() {
    if(scoreElement) {
        scoreElement.textContent = 'score: ' + scrore
    }
}

export function addScore(amount = 0){
    scrore += amount // increase score
    updateScore()    // update display text
}

export function resetScore() {
    scrore = 0       // reset back to zero
    updateScore()
}

export function getScore() {
    return scrore
}
