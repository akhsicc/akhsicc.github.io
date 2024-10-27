document.getElementById("link").onmousedown = function(){
    window.open("https://akicc.weebly.com/uploads/1/2/7/1/127136347/new_icc_constitution_draft_-_summer_2020.pdf", "_blank");
};
document.getElementById("link1").onmousedown = function(){
    window.open("https://docs.google.com/document/d/1448bY-W-eDId6RfV6zeMQvsLQB0UgdD4BO0nibjn8NQ/edit", "_blank");
};
document.getElementById("link2").onmousedown = function(){
    window.open("https://www.signupgenius.com/go/10C0E4EA4A92FA6F8C34-52426827-fall#/", "_blank");
};

document.getElementById("buttons").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./clubs.html"; }, animateSpeed);
};
