function onDisplay() {
    var nvb = document.querySelector("#nav_bars");    
    nvb.style.visibility = "visible";
    nvb.style.transform = "translateX(0)";
}

function offDisplay() {
    var nvb = document.querySelector("#nav_bars");    
    nvb.style.visibility = "hidden";
    nvb.style.transform = "translateX(-800px)";
}

