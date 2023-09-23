//shared.js
function checkLogin() {
    if (window.location.hash === '#profile' && !localStorage.getItem('user')) {
        window.location.hash = '';
    } else if (window.location.hash !== '#profile' && localStorage.getItem('user')) {
        window.location.hash = 'profile';
    }
}

window.addEventListener('load', checkLogin);
window.addEventListener('hashchange', checkLogin);