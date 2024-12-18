var button_panel_text = document.getElementById("button-panel-text");
var information_panel = document.getElementById("None-");
var papel_text2 = document.getElementById("panel-text2");
var fly_1_img = document.getElementById("fly-1-img");
var lorem = document.getElementById("Lorem-");
var fly_1 = document.getElementById("fly-1");

var Active = false;

button_panel_text.onclick=function(){
    console.log(information_panel);

    if (Active==false){
        information_panel.setAttribute("id","information-panel");
        lorem.setAttribute("id","Lorem");
        information_panel = document.getElementById("information-panel");
        Active=true;
        fly_1.style.animation="small-fly-1 0.5s forwards";
        fly_1_img.style.animation="fly-1-img-anim-moving 0.5s forwards";
    } else {
        fly_1_img.style.animation="fly-1-img-anim-moving-left 0.5s forwards";
        information_panel.setAttribute("id","None")
        information_panel = document.getElementById("None");
        Active=false;
        lorem.setAttribute("id","Lorem-");
        fly_1.style.animation="small-fly-1-exit 0.5s forwards";
    }
};
papel_text2.onmouseenter=function(){
    papel_text2.setAttribute("id","panel-text2-mouseenter");
};
papel_text2.onmouseleave=function(){
    papel_text2.setAttribute("id","panel-text2");
};