document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    function validatePasswords() {
        if (password.value === confirmPassword.value && password.checkValidity() && confirmPassword.checkValidity()) {
            confirmPassword.setCustomValidity('');
        } else {
            confirmPassword.setCustomValidity('Passwords do not match');
        }
    }

    password.addEventListener('input', validatePasswords);
    confirmPassword.addEventListener('input', validatePasswords);
});
