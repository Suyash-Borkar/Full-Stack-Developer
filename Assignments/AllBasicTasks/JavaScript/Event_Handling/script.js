// Function to change the text of the <h1> tag
function changeHeadingText() {
    const heading = document.getElementById('heading');
    heading.textContent = 'Vasudhaiva Kutumbakam';
}

// Add event listener to the button
const button = document.getElementById('mybutton');
button.addEventListener('click', changeHeadingText);
