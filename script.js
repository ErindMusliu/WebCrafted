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

let project_cards=document.querySelectorAll('#project-cards .project-img');
let project_img=document.getElementsByClassName('project-img');
let index=0;
let interval=setInterval(run, 3000)

function run(){
    index++;
    changeProject();
}

function changeProject(){
    if(index > project_cards.length){
        index=0;
    }

    else if(index < 0){
        index = project_img.length-1;
    }

    for(let i = 0; i<project_img.length;i++){
        project_img[i].style.transform=`translateX(${-index * 100}%)`;
        project_img[i].style.transition=`all 0.8s`;
    }
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
}

function showFaqDescription(num){
    let faq_bottom=document.querySelectorAll('#faq-card-bottom');
    let faq_icon=document.querySelectorAll('.faq-icon');

    if(num === "1"){
        faq_bottom[0].classList.toggle('faq-card-bottom-js');
        faq_icon[0].classList.toggle('fa-chevron-up');
        faq_icon[0].classList.toggle('fa-chevron-down');
    }

    if(num === "2"){
        faq_bottom[1].classList.toggle('faq-card-bottom-js');
        faq_icon[1].classList.toggle('fa-chevron-up');
        faq_icon[1].classList.toggle('fa-chevron-down');
    }
    
    if(num === "3"){
        faq_bottom[2].classList.toggle('faq-card-bottom-js');
        faq_icon[2].classList.toggle('fa-chevron-up');
        faq_icon[2].classList.toggle('fa-chevron-down');
    }

    if(num === "4"){
        faq_bottom[3].classList.toggle('faq-card-bottom-js');
        faq_icon[3].classList.toggle('fa-chevron-up');
        faq_icon[3].classList.toggle('fa-chevron-down');
    }
    
    if(num === "5"){
        faq_bottom[4].classList.toggle('faq-card-bottom-js');
        faq_icon[4].classList.toggle('fa-chevron-up');
        faq_icon[4].classList.toggle('fa-chevron-down');
    }

    if(num === "6"){
        faq_bottom[5].classList.toggle('faq-card-bottom-js');
        faq_icon[5].classList.toggle('fa-chevron-up');
        faq_icon[5].classList.toggle('fa-chevron-down');
    }
}