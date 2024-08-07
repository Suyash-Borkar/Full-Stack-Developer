// Function to display the greeting message
function displayGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = `Hello, ${nameInput}! Your User Name Is Verified.`;
}

// Add event listener to the button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', displayGreeting);
