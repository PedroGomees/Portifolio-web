let ocult = document.getElementById('Inicial');
window.addEventListener("scroll", reveal);
function reveal(){
   
    var reveals = document.querySelectorAll(".section2")
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
            ocult.classList.add('fade');
            
        }
        else{
            reveals[i].classList.remove('active');
            ocult.classList.remove('fade');
        }
    }
};

let visao = document.getElementById('visao');
let visaoText = document.getElementById('visaoText');
visao.addEventListener('click', function(){
visaoText.classList.toggle('hidden');
visaoText.classList.toggle('Desvanhecer');
})
