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
        container.appendChild(square);
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
