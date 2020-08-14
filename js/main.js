var hmenu = document.querySelector('#hmenu');
var nav = document.querySelector('.nav-ul');
var plus = document.querySelector('#plus');
var plus2 = document.querySelector('#plus2');
var cof = document.querySelector('.c');
var tea = document.querySelector('.tea');

var hide = document.querySelector('.hide');
var hide2 = document.querySelector('.hide2');
var hide3 = document.querySelector('.hide3');
var hide4 = document.querySelector('.hide4');

hide.addEventListener('click', function() {
    nav.classList.toggle('open');
});
hide2.addEventListener('click', function() {
    nav.classList.toggle('open');
});
hide3.addEventListener('click', function() {
    nav.classList.toggle('open');
});
hide4.addEventListener('click', function() {
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