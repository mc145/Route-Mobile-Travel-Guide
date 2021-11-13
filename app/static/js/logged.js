let param = window.location.search.split('=')[0].split('?')[1]; 
let val = window.location.search.split('=')[1]; 

let account = document.getElementById('navbar-account');

account.onclick = goToAccount; 

if(param == 'auth'){
    window.history.replaceState({}, null, '/'); 

}


function goToAccount(){
    window.location.href = '/account?auth=' + val; 
    return;  
}


function newTrip(){
    window.location.href = '/trip?auth=' + val; 
}