let param = window.location.search.split('=')[0].split('?')[1]; 
let val = window.location.search.split('=')[1]; 

if(param == 'auth'){
    window.history.replaceState({}, null, '/trip'); 

}