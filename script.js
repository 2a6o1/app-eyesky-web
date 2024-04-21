function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // For demonstration purposes, just logging the credentials
    console.log('Username: ' + username);
    console.log('Password: ' + password);

    window.location.href = "./map.html";
}
