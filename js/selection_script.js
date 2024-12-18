var button_information = document.getElementById("button-information");
var button_information_div = document.getElementById("button-information-div");

var Information_anim_off = document.getElementById("Information-anim-off");
var button1 = document.getElementById("button1");
var anim_active=false;

button1.setAttribute("id","off")
button1 = document.getElementById("off");

button_information.onmouseenter=function(){
    button_information_div.style.backgroundColor = "rgb(111, 97, 173)";
};
button_information.onmouseleave=function(){
    button_information_div.style.backgroundColor = "rgb(128, 128, 255)";
};
button_information.onclick=function(){
    if (anim_active==false){
        button1.setAttribute("id","button1");
        button1 = document.getElementById("button1");
        Information_anim_off.setAttribute("id","Information-anim-on-enter");
        Information_anim_off = document.getElementById("Information-anim-on-enter");
        button1.innerHTML="Gmail";
        anim_active=true;
    } else {
        anim_active=false;
        button1.innerHTML="";
        button1.setAttribute("id","off");
        button1 = document.getElementById("off");
        Information_anim_off.setAttribute("id","Information-anim-off-exit");
        Information_anim_off = document.getElementById("Information-anim-off-exit");
    }
};
button1.onclick=function(){
    location.assign("pages/gmail.html");
};