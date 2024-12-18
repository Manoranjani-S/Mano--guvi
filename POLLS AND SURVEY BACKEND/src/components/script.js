// script.js

// Get references to key elements
const loginPage = document.getElementById('login-page');
const pollPage = document.getElementById('poll-page');
const loginButton = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Login button event listener
loginButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email and password (accept any non-empty inputs)
    if (email && password) {
        alert("Login successful!");

        // Hide login page and show poll page
        loginPage.style.display = "none";
        pollPage.style.display = "block";
    } else {
        alert("Please enter a valid email and password.");
    }
});

// Add option button event listener
document.getElementById('add-option').addEventListener('click', () => {
    const optionsDiv = document.getElementById('options');
    const inputCount = optionsDiv.getElementsByClassName('option-input').length;
    const newOption = document.createElement('input');
    newOption.type = "text";
    newOption.className = "option-input";
    newOption.placeholder = `Option ${inputCount + 1}`;
    optionsDiv.appendChild(newOption);
});

// Create poll button event listener
document.getElementById('create-poll-btn').addEventListener('click', () => {
    const question = document.getElementById('poll-question').value.trim();
    const options = Array.from(document.getElementsByClassName('option-input')).map(input => input.value.trim());

    if (question && options.every(option => option)) {
        const pollsDiv = document.getElementById('polls');
        const poll = document.createElement('div');
        poll.innerHTML = `<h3>${question}</h3><ul>${options.map(option => `<li>${option}</li>`).join('')}</ul>`;
        pollsDiv.appendChild(poll);

        document.getElementById('poll-question').value = "";
        document.getElementById('options').innerHTML = `
            <input type="text" class="option-input" placeholder="Option 1">
            <input type="text" class="option-input" placeholder="Option 2">
        `;
    } else {
        alert("Please fill in the question and all options.");
    }
});
