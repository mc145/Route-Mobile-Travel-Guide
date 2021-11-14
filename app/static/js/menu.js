//javascript code for menu.html
//now it's unused bcs it has an useless function but idk
//check system.js it's the actual menu.html javascript file

var opacity = 0;



function fadeInDelay() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){fadeInDelay()},100);
   }else if (opacity>0){
   		opacity -= .1;
   		setTimeout(function(){fadeInDelay()}, 100);
   }
   document.getElementsByClassName("usrnamebox-wrapper")[0].style.opacity = opacity;
}




