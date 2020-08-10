var hmenu = document.querySelector('#hmenu');
var nav = document.querySelector('.nav-ul');

hmenu.addEventListener('click', function() {
    nav.classList.toggle('open');
});