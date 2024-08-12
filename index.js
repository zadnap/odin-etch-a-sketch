let size = 4

function generateSquare(size) {
    const square = document.createElement('div')

    square.classList.add('square')
    square.style.width = size + 'px'
    square.style.height = size + 'px'

    return square
}

function generateSketch(size) {
    const container = document.querySelector(".container")    
    
    for (let i = 0; i < size ** 2; i++) {
        const square = generateSquare(container.offsetWidth / size)
        container.appendChild(square)
    }
}

generateSketch(size)