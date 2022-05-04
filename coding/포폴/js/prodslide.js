var rbtn = document.querySelectorAll(".rbtn");

for ( i = 0; i < rbtn.length; i++){
    
    rbtn[i].addEventListener("click",function(){
        var prodimg = this.parentNode.parentNode.children;
        if ( prodimg[0].style.transform == 'translateX(-350px)')
            prodimg[0].style.transform = 'translateX(0px)';
        else
            prodimg[0].style.transform = 'translateX(-350px)';
    });
}