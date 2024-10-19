 // Handling form submission
 document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    loginError.innerText = ''; // Clear previous error messages

    // Get users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email exists
    if (!existingUsers.includes(email)) {
        loginError.innerText = "This email is not registered. Please sign up.";
        return; // Exit function if email does not exist
    }

    // Check if the password is correct
    const storedPassword = localStorage.getItem(email); // Get stored password using email as key
    if (storedPassword !== password) {
        loginError.innerText = "Incorrect password. Please try again.";
        return; // Exit function if password is incorrect
    }

    // If login is successful
    document.getElementById('login-message').innerText = "Login Successful for " + email;

    // Redirect to main page
    window.location.href = 'http://127.0.0.1:5501/index.html'; // Replace 'main.html' with your main page URL
});