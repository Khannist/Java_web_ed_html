function movetest(ths) {
    location.href = "lt_prdt.html";
    console.log($(ths).attr("value"));
    $("#"+$(ths).attr("value")).click();
};