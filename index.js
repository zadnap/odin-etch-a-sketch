function generateSquare(size) {
    const square = document.createElement('div')

    square.classList.add('square')
    square.style.width = size + 'px'
    square.style.height = size + 'px'

    return square
}

function generateSketch(size) {
    const container = document.querySelector(".container")    
    container.innerHTML = ''
    
    for (let i = 0; i < size * size; i++) {
        const square = generateSquare(container.offsetWidth / size)
        container.appendChild(square)
        sketch(square)
    }
}

function sketch(square) {
    square.addEventListener('mouseover', () => {
        const style = window.getComputedStyle(square)
        square.style.opacity = Number(style.getPropertyValue('opacity')) + 0.1
    })
}

function changeSize() {
    const newSize = Number(prompt("Change the size of your sketch: "))
    if (newSize && newSize <= 100) {
        generateSketch(newSize)
    }
    else {
        alert('Invalid size (must be equal to or smaller than 100)')
    }
}

const changeSizeBtn = document.getElementById('change-size')
changeSizeBtn.addEventListener('click', changeSize)

generateSketch(16)