document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login Successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password!');
    }
}); 