function chProdImg(cls) {
    location.href = "lprdt_" + cls + ".html";
};

$("nav ul li").click(function(){
    var liClassName = $(this).attr("id");
    
    if (liClassName == "uniform"){
        chProdImg(liClassName);
    }else if (liClassName == "cap") {
        chProdImg(liClassName);
    }else if (liClassName == "wear"){
        chProdImg(liClassName);
    }else if(liClassName == "kids"){
        chProdImg(liClassName);
    }else if(liClassName == "cheer"){
        chProdImg(liClassName);
    }else if(liClassName == "life"){
        chProdImg(liClassName);
    }else if(liClassName == "show") {
        chProdImg(liClassName);
    }else if(liClassName == "plan") {
        chProdImg(liClassName);
    }

});

