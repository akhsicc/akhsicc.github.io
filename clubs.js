var offset;
if (width >= 1024) {
    offset = 125;
}
else {
    offset=300;
}
document.getElementById("academicscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec1").offsetTop - offset, behavior: "smooth"});
};

document.getElementById("culturalscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec2").offsetTop - offset, behavior: "smooth"});
};

document.getElementById("sjscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec3").offsetTop - offset, behavior: "smooth"});
};

document.getElementById("volunteerscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec4").offsetTop - offset, behavior: "smooth"});
};

document.getElementById("leisurescroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec5").offsetTop - offset, behavior: "smooth"});
};

document.getElementById("newscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec6").offsetTop - offset, behavior: "smooth"});
};


document.getElementById("backtop").onmousedown = function(){
    scrollTo({top: document.getElementById("scrolling").offsetTop - offset, behavior: "smooth"});
};

