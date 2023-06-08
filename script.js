function changeStyle(){
    var bar = document.getElementById("bar");
    bar.classList.add('active');
    var nav = document.getElementById("nav");
    nav.classList.add('activ');
    var cross = document.getElementById("cross");
    cross.classList.add('activl');
}
function changeStyles(){
    var bar = document.getElementById("bar");
    bar.classList.remove('active');
    var nav = document.getElementById("nav");
    nav.classList.remove('activ');
    var cross = document.getElementById("cross");
    cross.classList.remove('activl');
}
window.addEventListener('scroll', function(){
    document.getElementById('moddle');
    var moddle = document.getElementById("moddle");
    moddle.classList.toggle("light", window.scrollY > 0);
    });