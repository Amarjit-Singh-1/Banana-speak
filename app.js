window.onload=function(){
    var btnTranslate = document.querySelector("#btn-translate");
    if (btnTranslate) {
        btnTranslate.addEventListener("click",function clickEventHandler() {
            console.log("clicked")
        })
    }
}

