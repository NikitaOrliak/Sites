const board = document.querySelector('#board')
const colors = [
    'rgb(172, 0, 184)', 
    'rgb(147, 0, 81)', 
    'rgb(36, 141, 226)', 
    'rgb(219, 7, 25)', 
    'rgb(14, 189, 26)',
    'rgb(195, 166, 5)',
    'wheat'
    ]
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    const index = Math.ceil(Math.random() * colors.length)
    return colors[index]
}