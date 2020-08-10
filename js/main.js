var hmenu = document.querySelector('#hmenu');
var nav = document.querySelector('.nav-ul');
var plus = document.querySelector('#plus');
var cof = document.querySelector('.cof');

hmenu.addEventListener('click', function() {
    nav.classList.toggle('open');
});

plus.addEventListener('click', function() {
    cof.classList.toggle('open');
});