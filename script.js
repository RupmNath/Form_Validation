document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation conditions
    if (fullName.length < 5) {
        alert('Full Name must be at least 5 characters long.');
        return;
    }

    if (!email.includes('@')) {
        alert('Enter a valid Email ID.');
        return;
    }

    if (phone.length !== 10 || phone === '123456789') {
        alert('Enter a valid 10-digit Phone Number.');
        return;
    }

    if (password === 'password' || password.length < 8 || password === fullName) {
        alert('Password is not strong enough.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Form submitted successfully!');
});
