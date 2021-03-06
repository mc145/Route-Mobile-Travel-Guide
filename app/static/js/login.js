let loginForm = document.querySelector('form');
let alertContainer = document.getElementById('alert-container'); 
let alertMessage = document.getElementById('alert-message');  

let API_URL = 'http://localhost:5000/login'; 

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const loginData = new FormData(loginForm); 

    const email = loginData.get('email'); 
    const password = loginData.get('password'); 

 
    loginForm.reset(); 

    const login_data = {
        'email': email, 
        'password': password 
    }; 


    fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(login_data) , 
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(loginResponse => {
        statusCode = loginResponse.code; 
        if(statusCode == 1){  
            
            window.location.href = `/?auth=${loginResponse.message}`; 
        
        } 

        else{
            alertMessage.innerHTML = loginResponse.message; 
            alertContainer.style.opacity = '100'; 
        }

    }); 
}); 