document.getElementById("link").onmousedown = function(){
    window.open("https://akicc.weebly.com/uploads/1/2/7/1/127136347/new_icc_constitution_draft_-_summer_2020.pdf", "_blank");
};
document.getElementById("link1").onmousedown = function(){
    window.open("https://docs.google.com/document/d/1D0n3Iboh2PKLEOdSxRaiixyuttUZSzVmfqHyK1PBUAs/edit?usp=sharing", "_blank");
};
document.getElementById("link2").onmousedown = function(){
    //window.open("https://forms.gle/V1Lqep6i7Vf8i7Ta7", "_blank");
};

document.getElementById("buttons").onmousedown = function(){
    document.getElementById("large").style = "width: 100%;";
    document.getElementById("imglarge").style = "opacity: 1;";
    setTimeout(function(){ window.location.href = "./clubs.html"; }, animateSpeed);
};
