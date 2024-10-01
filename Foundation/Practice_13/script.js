const input = document.querySelector('textarea');
const tags = document.querySelector('.tags');

// Add event listener to capture keyup events on the textarea
input.addEventListener('keyup', (event) => {
    createTags(event.target.value);
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        event.target.value = ''; // Clear the input value
        const allTags = document.querySelectorAll('.tag');
        if (allTags.length > 0) randomSelect(allTags); // Proceed only if there are tags
    }
});

function createTags(input) {
    // Split input by commas, remove empty strings, and trim spaces
    const texts = input.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    tags.innerHTML = ''; // Clear existing tags

    // Create and append new tags based on input
    texts.forEach(text => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerText = text;
        tags.appendChild(tag);
    });
}

function randomSelect(allTags) {
    const highlightDuration = 100; // Duration of each highlight in milliseconds
    const totalDuration = 3000; // Total duration for random highlighting
    const intervalTime = 100; // Time between each random highlight

    // Randomly highlight tags periodically
    const interval = setInterval(() => {
        highlightRandomTag(allTags, highlightDuration);
    }, intervalTime);

    // Stop the interval after the total duration and highlight the final tag
    setTimeout(() => {
        clearInterval(interval); // Stop the periodic random highlighting
        highlightRandomTag(allTags); // Highlight the final selected tag
    }, totalDuration);
}

// Function to highlight a random tag for a specific duration
function highlightRandomTag(tags, duration = 0) {
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    randomTag.classList.add('picked');
    if (duration > 0) {
        setTimeout(() => {
            randomTag.classList.remove('picked');
        }, duration);
    }
}




