document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('reset-button');
  
    function createGrid(size) {
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
      container.innerHTML = ''; // Remove old grid
  
      for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
  
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = 'blue';
        });
      }
    }
  
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        let size = parseInt(prompt('Enter the number of squares per side (max 100):'));
        if (size > 100) {
          alert('Size too large! Setting to maximum size of 100.');
          size = 100;
        }
        createGrid(size);
      });
    }
  
    createGrid(16); // Create the initial 16x16 grid
  });