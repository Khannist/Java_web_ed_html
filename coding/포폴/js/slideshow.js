var photo = document.getElementsByClassName("photo");
var prev = document.getElementById("prev");
var nxt = document.getElementById("next");
var current = 0;


prev.onclick = prevbtn;
nxt.onclick = nxtbtn;


function showSlides(n) {
    for (let i = 0; i < photo.length; i++){
        photo[i].style.display = "none";
    }
    photo[n].style.display = "block";
}

function prevbtn() {
    if (current > 0) current -= 1;
    else
        current = photo.length -1;
    showSlides(current);
}

function nxtbtn() {
    if (current < photo.length-1) current += 1;
    else
        current = 0;
    showSlides(current);
}