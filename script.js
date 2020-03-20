

//////// dark mode

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);



///////// modal form

const conBut = document.querySelector('.conBut');
const modalbg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

conBut.addEventListener('click',function(){
    modalbg.classList.add('bg-active');
});

modalClose.addEventListener('click',function(){
    modalbg.classList.remove('bg-active');
});
