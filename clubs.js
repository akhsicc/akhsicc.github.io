document.getElementById("academicscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec1").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("culturalscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec2").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("sjscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec3").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("volunteerscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec4").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("leisurescroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec5").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("newscroll").onmousedown = function(){
    scrollTo({top: document.getElementById("clubsec6").offsetTop - 100, behavior: "smooth"});
};

document.getElementById("backtop").onmousedown = function(){
    scrollTo({top: 0, behavior: "smooth"});
};

