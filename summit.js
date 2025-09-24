function creatADiv (options = {}) {
    const creatDiv = document.createElement('div')
    const pixels = '60px' // lazy
    creatDiv.style.height = options.height || pixels
    creatDiv.style.width = options.height || pixels
    creatDiv.style.position = options.position || 'absolute'
    creatDiv.style.left = options.width || pixels

    document.body.appendChild(creatDiv)
    
    return {}
}

creatADiv()