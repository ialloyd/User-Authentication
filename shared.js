function isLoggedIn() {
    return !!localStorage.getItem('user');
}

function redirect() {
    if (window.location.hash === '#profile' && !isLoggedIn()) {
        window.location.hash = '';
    } else if (window.location.hash !== '#profile' && isLoggedIn()) {
        window.location.hash = 'profile';
    }
}

window.addEventListener('load', redirect);
window.addEventListener('hashchange', redirect);
