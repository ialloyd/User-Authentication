const inputElements = document.querySelectorAll('input')
const message = document.getElementById('message')

if (localStorage.getItem('user')) {
    window.location.hash = 'profile';
}

function generateAccessToken() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputElements[0].value === '' || inputElements[1].value === '' || inputElements[2].value === '' || inputElements[3].value === '') {
        message.textContent = "All fields are mandatory!";
        return;
    }
    else if (inputElements[2].value !== inputElements[3].value) {
        message.textContent = "Passwords didn't match!";
        return;
    }

    const userDetails = {
        name: inputElements[0].value,
        email: inputElements[1].value,
        password: inputElements[2].value,
        accessToken: generateAccessToken()
    };
    inputElements[0].value = '';
    inputElements[1].value = '';
    inputElements[2].value = '';

    localStorage.setItem('user', JSON.stringify(userDetails));
    message.textContent = 'Signup Successful!'
    setTimeout(() => { window.location.hash = 'profile'; }, 2000);
});