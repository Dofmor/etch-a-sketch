//populates the grid based on the size chosen
function populateSquares(num) {
    const grid = document.querySelector('.sketch-container')
    const height = grid.clientHeight 
    const width = grid.clientWidth

    for (let i = 0; i < num; i++) {
        const row = document.createElement('div')
        row.classList.add('sketch-row')

        for (let j = 0; j < num; j++) {
            const square = document.createElement('div')
            square.classList.add('sketch-square')
            row.appendChild(square)
        }

        grid.appendChild(row)


    }
}

//fills a square in the grid by applying fill class
function fillSquare() {
    this.classList.add('fill')
}

//clears entire grid by removing fill class
function clearGrid () {
    const squares = document.querySelectorAll ('.sketch-square')
    squares.forEach (square => square.classList.remove('fill') )
}

populateSquares(16)

//node list of all squres in a grid
const squares = document.querySelectorAll ('.sketch-square')

squares.forEach (square => square.addEventListener('mouseover', fillSquare))

const clearButton = document.querySelector ('#clear')
clearButton.addEventListener('click', clearGrid)


