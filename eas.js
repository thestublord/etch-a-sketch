window.addEventListener('DOMContentLoaded', (event) => {
    createGrid(16);
});

function createGrid(size) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.innerHTML = ''; // Clear the container before generating new grid

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'rgb(255, 255, 255)';
        square.dataset.interactions = '0';
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor() {
    let interactions = parseInt(this.dataset.interactions);
    if (interactions < 10) {
        let currentColor = this.style.backgroundColor;
        let colors = currentColor.match(/\d+/g);
        let newColors = colors.map(color => Math.max(color - 25, 0));
        this.style.backgroundColor = `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
        this.dataset.interactions = interactions + 1;
    }
}

function changeGridSize() {
    let newSize = prompt("Enter new grid size (max 100):", "16");

    if (newSize > 100) {
        alert("Max grid size is 100.");
        return;
    }

    createGrid(newSize);
}
