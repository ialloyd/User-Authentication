// profile.js file
if (!localStorage.getItem('user')) {
    window.location.href = 'index.html';
} else {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    const container = document.getElementsByClassName('container')[0];

    const profile = document.createElement('div');
    profile.classList.add('profile');

    profile.innerHTML =
        `<p>Profile</p>
        <span class="material-symbols-outlined">
            person
        </span>
        <p>Full Name : ${userDetails.name}</p>
        <p>Email : ${userDetails.email}</p>
        <p>Token : ${userDetails.accessToken}</p>
        <p>Password : ${userDetails.password}</p>
        <button>LOGOUT</button>`

    container.appendChild(profile);
}

const logoutBtn = document.getElementsByTagName('button')[0];

logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
});