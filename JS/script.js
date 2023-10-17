var nav=document.querySelector('nav');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 20){
            nav.style.backgroundColor = 'rgba(0,0,0,0.8)';
            nav.classList.add('shadow');
        }else{
            nav.style.backgroundColor = 'transparent';
    nav.classList.remove('shadow')
    }
}
)
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});