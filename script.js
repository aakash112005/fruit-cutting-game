// const signupForm = document.getElementById('signupForm');
// const loginForm = document.getElementById('loginForm');
// const messageDiv = document.getElementById('message');

// // Signup function
// signupForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const username = document.getElementById('signupUsername').value;
//     const password = document.getElementById('signupPassword').value;

//     // Save user data to local storage
//     localStorage.setItem(username, password);
//     messageDiv.textContent = 'Signup successful! You can now login.';
//     signupForm.reset();
// });

// // Login function
// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     // Check user credentials
//     const storedPassword = localStorage.getItem(username);
//     if (storedPassword && storedPassword === password) {
//         messageDiv.textContent = 'Login successful!';
//         messageDiv.style.color = 'green';
//     } else {
//         messageDiv.textContent = 'Invalid username or password.';
//         messageDiv.style.color = 'red';
//     }
// });
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Here you would typically send the login info to the server
    console.log('Login:', username, password);
    alert('Login submitted!');
});

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    // Here you would typically send the signup info to the server
    console.log('Signup:', username, password);
    alert('Signup submitted!');
});
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Signup successful! You can now log in.');
        window.location.href = 'index.html'; // Redirect to login page
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            alert('Login successful! Press OK to enter in Game');
            window.location.href = 'welcome.html';
            // Redirect to another page or dashboard
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}
