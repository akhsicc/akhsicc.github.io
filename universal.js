let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
    if (window.scrollY <= 50) {
        document.getElementById("username").style="font-size: 35px; ";
        document.getElementById("menu").style = "box-shadow: none; padding-top: 60px; padding-bottom: 80px;";
        document.getElementById("tabs").style="margin-top: 0px;";
    }
    else {
        document.getElementById("menu").style = "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); padding-top: 0px; padding-bottom: 00px; height: 100px;";
        document.getElementById("tabs").style="margin-top: -45px;";
        document.getElementById("username").style="font-size: 0;";
        
    }
}, 10)
}
else {

}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
window.onload = function(){
    wait(200);
    document.getElementById("large").style = "width: 0;"
    document.getElementById("imglarge").style = "opacity: 0;";
};

document.getElementById("menulink1").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./index.html"; }, 1000);
};

document.getElementById("menulink2").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./clubs.html"; }, 1000);
};


document.getElementById("menulink3").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./meetings-and-events.html"; }, 1000);
};

document.getElementById("menulink4").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./guidelines.html"; }, 1000);
};

document.getElementById("menulink5").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./contact.html"; }, 1000);
};


