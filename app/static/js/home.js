
//javascript code for front end



var opacity = 0;
//intialize variable for pop status
var showpopup = "yes";
var haveAccont = "yes";


$(function() {

    $('#introstart').click(function(){
        $('.intropopup-wrapper').fadeOut(300);
    });

});










function fadeInDelay() {
   if (opacity<1) {
      opacity += .1;
      setTimeout(function(){fadeInDelay()},100);
   }
   document.getElementsByClassName("navbar-container")[0].style.opacity = opacity;
   document.getElementsByClassName("botpanel")[0].style.opacity=opacity;
   document.getElementsByClassName("middle-container")[0].style.opacity=opacity;
   document.getElementsByClassName("middle-container")[0].style.zIndex="5";
   localStorage.setItem("showpop", "no");
}

function checkPopStatus() {
    if(localStorage.getItem("showpop") != showpopup){
   document.getElementsByClassName("navbar-container")[0].style.opacity=1;
   document.getElementsByClassName("botpanel")[0].style.opacity=1;
   document.getElementsByClassName("middle-container")[0].style.opacity=1;
   document.getElementsByClassName("middle-container")[0].style.zIndex="5";
   document.getElementsByClassName("intropopup-wrapper")[0].style.opacity=0;
   document.getElementsByClassName("intropopup-wrapper")[0].style.zIndex="0";
}
}

function checkAccountStatus(){
    if(localStorage.getItem("haveAccount") == haveAccount){
        window.location.replace("../html/menu.html");
    }
}


$(document).ready( function () {
  checkPopStatus();
  checkAccountStatus();
});

//function below for popup functionality
/*$j(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $j('#popup').delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $j('#popup-close, #popup').click(function()
    {
        $j('#popup').fadeOut(); // Now the pop up is hidden.
    });
});*/





