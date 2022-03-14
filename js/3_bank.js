const loginSubmit = document.getElementById('login-submit');
loginSubmit.addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const userPassword = document.getElementById('user-password').value;

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = '3_banking.html';
    }
});