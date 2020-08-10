var hmenu = document.querySelector('#hmenu');
var nav = document.querySelector('.nav-ul');
var plus = document.querySelector('#plus');
var plus2 = document.querySelector('#plus2');
var cof = document.querySelector('.c');
var tea = document.querySelector('.tea');

var hide = document.querySelector('.hide');

hide.addEventListener('click', function() {
    nav.classList.toggle('open');
});


hmenu.addEventListener('click', function() {
    nav.classList.toggle('open');
});

plus.addEventListener('click', function() {
    cof.classList.toggle('open');
});

plus2.addEventListener('click', function() {
    tea.classList.toggle('open');
});