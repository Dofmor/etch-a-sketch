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

populateSquares(16)