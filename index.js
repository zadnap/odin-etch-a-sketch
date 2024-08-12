function generateSquare(size) {
    const square = document.createElement('div')

    square.classList.add('square')
    square.style.width = size + 'px'
    square.style.height = size + 'px'

    return square
}

function generateSketch(size) {
    const container = document.querySelector(".container")   
    const calculatedSize = container.offsetWidth  / size

    container.innerHTML = ''
    
    for (let i = 0; i < size ** 2; i++) {
        const square = generateSquare(calculatedSize)
        container.appendChild(square)
    }

    sketch(container)
}

function sketch(container) {
    container.addEventListener('mouseover', (e) => {
        const style = window.getComputedStyle(e.target)
        if (e.target.style.opacity < 1) 
            e.target.style.opacity = Number(style.getPropertyValue('opacity')) + 0.1
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

document.getElementById('change-size').addEventListener('click', changeSize)

generateSketch(16)