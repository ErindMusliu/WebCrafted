function showNav(){
    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-js');

    let bars_1=document.getElementById('bars-1');
    let bars_2=document.getElementById('bars-2');
    let bars_3=document.getElementById('bars-3');

    bars_1.classList.toggle('bars1-js');
    bars_2.classList.toggle('bars2-js');
    bars_3.classList.toggle('bars3-js');
}