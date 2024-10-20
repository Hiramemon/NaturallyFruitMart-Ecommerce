
        //  // Handling form submission
        //  document.getElementById('signup-form').addEventListener('submit', function(e) {
        //     e.preventDefault(); // Prevent default form submission
        //     const email = document.getElementById('signup-email').value;
        //     const password = document.getElementById('signup-password').value;
        //     const emailError = document.getElementById('email-error');

        //     emailError.innerText = '';

        //     // Check if email already exists in local storage
        //     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        //     if (existingUsers.includes(email)) {
        //         emailError.innerText = "This email is already registered. Please log in.";
        //         return; // Exit function if email exists
        //     }

        //     // Save the email in the users array
        //     existingUsers.push(email);
        //     localStorage.setItem('users', JSON.stringify(existingUsers)); // Save users array

        //     // Save the email and password in local storage
        //     localStorage.setItem(email, password); // Store password with email as key

        //     // Display a success message
        //     document.getElementById('signup-message').innerText = "Sign Up Successful for " + email;

        //     // Redirect to main page
        //     window.location.href = 'http://127.0.0.1:5501/index.html'; 
        // });


        document.getElementById('signup').addEventListener('submit', function(event) {
            event.preventDefault();
            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            let user = {
                username: username,
                email: email,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));
            alert('Sign Up Successful!');

            window.location.href = '/pages/products/products.html';
        });

