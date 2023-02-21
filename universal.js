let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
        if (window.scrollY <= 50) {
            document.getElementById("username").style="font-size: 35px; ";
            document.getElementById("menu").style = "box-shadow: none; padding-top: 60px; padding-bottom: 80px;";
            document.getElementById("tabs").style="margin-top: 0px;";
            document.getElementById("menuimage").style = "width: 50px;";
        }
        else {
            document.getElementById("menu").style = "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); padding-top: 0px; padding-bottom: 0px; height: 90px;";
            document.getElementById("tabs").style="margin-top: 15px;";
            document.getElementById("username").style="font-size: 0;";
            document.getElementById("menuimage").style = "width: 0px;";
            
        }
    }, 10)
}

/*menu*/
var openm = false;
function openmenu() {
    if (openm == false) {
        document.getElementById("menu").style.height = "1900px";
        openm = true;
        document.getElementById("menubutton").style.transform = "rotate(-90deg)";
    }
    else if (openm == true) {
        document.getElementById("menu").style.height = "140px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
}

setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && openm == true) {
        document.getElementById("menu").style.height = "1900px";
        document.getElementById("menu").style.backgroundColor = "var(--main)";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "85px";
    }

}, 10);




function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

var animateSpeed = 400;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
window.onload = function(){
    wait(animateSpeed);
    document.getElementById("large").style = "width: 0;"
    document.getElementById("imglarge").style = "opacity: 0;";
};

document.getElementById("username").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
};

document.getElementById("menulink1").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
};

document.getElementById("menulink2").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./clubs.html"; }, animateSpeed);
};

/*
document.getElementById("menulink3").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./meetings-and-events.html"; }, animateSpeed);
};*/

document.getElementById("menulink4").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./guidelines.html"; }, animateSpeed);
};

document.getElementById("menulink5").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./contact.html"; }, animateSpeed);
};

document.getElementById("menuimage").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
};


