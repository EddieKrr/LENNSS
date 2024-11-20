// Get DOM elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn'); // Updated id
const loginBtn = document.getElementById('loginBtn'); // Updated id

// Add event listeners for toggle buttons
registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Add 'active' class for sign-up
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Remove 'active' class for sign-in
});
