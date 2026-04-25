const lists = document.querySelectorAll('.list');

lists.forEach(list => {
  const heading = list.querySelector('.list-heading');
  const container = list.querySelector('.list-container');

  heading.addEventListener('click', () => {
    // Check if the clicked section is currently open
    const isOpen = container.classList.contains('show');

    // Close all sections by removing the show class
    document.querySelectorAll('.list-container').forEach(c => {
      c.classList.remove('show');
    });

    // If the section was closed, open it
    // If it was already open, it stays closed because of the previous step
    if (!isOpen) {
      container.classList.add('show');
    }
  });
});

const words = ["generosity", "contributions", "sponsorship", "you"];
const wContent = document.querySelector('#content');

let currentIndex = 0;

// Set the first word when the page loads
wContent.textContent = words[currentIndex];

wContent.style.transitionDelay = "1s";
wContent.style.transitionProperty = "all"
// Set an interval to run every 200 milliseconds
setInterval(() => {
  // 1. Fade out the current text
  wContent.style.opacity = 0;
  
  // 2. Wait 100 milliseconds for the fade out to finish
  setTimeout(() => {
    // Move to the next word
    currentIndex++;
    
    // Reset the counter if it reaches the end
    if (currentIndex === words.length) {
      currentIndex = 0;
    }
    
    // Update the text content while it is hidden
    wContent.textContent = words[currentIndex];
    
    // 3. Fade the new text back in
    wContent.style.opacity = 1;
  }, 100); 
  
}, 2000);

