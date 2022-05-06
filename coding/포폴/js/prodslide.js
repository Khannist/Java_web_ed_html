var rbtn = document.querySelectorAll(".rbtn");
count = 0;
for ( i = 0; i < rbtn.length; i++){
    rbtn[i].addEventListener("click",function(){
        var prodimg = this.parentNode.parentNode.children;


        if ( prodimg[0].style.transform == 'translateX(-350px)'){
            prodimg[0].style.transform = 'translateX(0px)';
            prodimg[1].style.transform = 'translateX(350px)';
            prodimg[0].style.transition = "1s ease-out";
            prodimg[1].style.transition = "1s ease-out";
            count = 0;
        }
        else{
            prodimg[0].style.transform = 'translateX(350px)';
            prodimg[1].style.transform = 'translateX(0px)';
            prodimg[0].style.transition = "1s ease-out";
            prodimg[1].style.transition = "1s ease-out";
            count = 1;
        }

        if ( count == 1) {
            setTimeout(() => {
                prodimg[0].style.transform = 'translateX(-350px)';
                prodimg[0].style.transition = '0s';
            }, 1000);
        }else{
            setTimeout(() => {
                prodimg[1].style.transform = 'translateX(-350px)';
                prodimg[1].style.transition = '0s';
            }, 1000);
        }

    });
}

