let param = window.location.search.split('=')[0].split('?')[1]; 
let val = window.location.search.split('=')[1]; 

let submitForm = document.querySelector('form');  
let API_URL = 'http://localhost:5000/account';  


if(param == 'auth'){
    window.history.replaceState({}, null, '/account'); 

}

submitForm.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    const userData = new FormData(submitForm);
    let nationality = userData.get('nationality'); 
    let gender = userData.get('gender'); 
    let age = userData.get('age'); 
    let religion = userData.get('religion'); 


    submitForm.reset();
    
    let submitData = {
        'nationality': nationality, 
        'gender': gender, 
        'age': age, 
        'religion': religion 
    }; 

    fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(submitData), 
        headers: {
            'content-type': 'application/json'
        }        
    }); 
}); 