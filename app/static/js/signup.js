let signupForm = document.querySelector('form'); 
let alertMessage = document.getElementById("alert-container"); 
let alertMessageText = document.getElementById('alert-message'); 

let API_URL = 'http://localhost:5000/signup'; 

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const signupData = new FormData(signupForm); 

    const email = signupData.get('email'); 
    const password = signupData.get('password'); 

 
    signupForm.reset(); 

    const signup_data = {
        'email': email, 
        'password': password 
    }; 


    fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(signup_data) , 
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(signupResponse => {
        if(signupResponse.code == 0){
            alertMessage.style.backgroundColor = 'rgb(255,0,0)'; 
            alertMessageText.innerHTML = signupResponse.message; 
            alertMessage.style.opacity = '100'; 
        }
        else{
            alertMessage.style.opacity = '100';
            window.location.href = '/';   
        }

    }); 
}); 