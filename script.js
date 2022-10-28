const barEl = document.getElementById('bars');
const navbar = document.querySelector('.wrapper__2');
const close = document.getElementById('close');

if(barEl) {
    
    barEl.addEventListener("click", () => {
        barEl.classList.add('hide');
        navbar.classList.add('active');
    });
}

if(close) {
    
    close.addEventListener('click', ()=> {
        barEl.classList.remove('hide');
        navbar.classList.remove('active');
    });
}