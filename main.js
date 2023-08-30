//populates the grid based on the size chosen
function populateGrid(num) {
    const grid = document.querySelector('.sketch-container')

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
    
    const squares = document.querySelectorAll ('.sketch-square')

    squares.forEach (square => square.addEventListener('mouseover', fillSquare))
}

function removeGrid () {
    const grid = document.querySelector('.sketch-container')
    
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}
//fills a square in the grid by applying fill class
function fillSquare() {
    this.style.background = "#FE5163"
}

//creates a new grid with a layout determined by slider value
function newGrid () {
    const newLayout = slider.value + " x " + slider.value
    sliderNum.innerHTML = newLayout;
    removeGrid()
    populateGrid(slider.value)
}
//clears entire grid by removing fill class
function clearSquares () {
    const squares = document.querySelectorAll ('.sketch-square')
    squares.forEach (square => square.style.background = "#ffffff")
}

populateGrid(16)

const clearButton = document.querySelector ('#clear')
clearButton.addEventListener('click', clearSquares)

const slider = document.querySelector ('#slider')
const sliderNum = document.querySelector ('#slider-number')
slider.addEventListener('change', newGrid)

