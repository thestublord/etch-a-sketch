document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const container = document.getElementById('container');
  
    if (container) {
      console.log('Container element found');
    } else {
      console.log('Container element not found');
    }
  
    for(let i = 0; i < 256; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
      
      if (i % 16 === 0) { // Log a message every 16 iterations
        console.log(`Created ${i} grid items so far`);
      }
    }
  
    console.log('Grid creation complete');
  });