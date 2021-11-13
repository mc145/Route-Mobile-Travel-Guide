from flask import render_template, request, abort, flash, redirect, url_for
from app import app
import json
import sqlite3


@app.route('/')
def index():
    if request.method == 'GET': 
        auth = request.args.get('auth', default='*', type = str) 
        if(check_if_auth_exists(auth)):
            return render_template('logged.html') 
        return render_template('home.html')


@app.route('/account', methods=['GET', 'POST']) 
def account(): 

    auth = request.args.get('auth', default='*', type=str) 
    if(check_if_auth_exists(auth)): 
        return render_template('account.html') 

    if request.method == 'POST': 
        nationality = request.get_json()['nationality'] 
        gender = request.get_json()['gender'] 
        age = request.get_json()['age'] 
        religion = request.get_json()['religion'] 
        
            
    return render_template('home.html') 


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST': 
        email = request.get_json()['email']
        password = request.get_json()['password'] 
        
        user_exists = check_if_user_exists(email, password) 

        if user_exists: 
            response_message = {
                "code": 1, 
                "message": password 
            }
        else: 
            response_message = {
                "code": 0, 
                "message": "Account not registered" 
            }
       
        return json.dumps(response_message) 

    return render_template('login.html') 


@app.route('/signup', methods=['GET', 'POST']) 
def signup(): 
    if request.method == 'POST': 
        email = request.get_json()['email'] 
        password = request.get_json()['password'] 
        response_message = add_user(email, password) 

        return json.dumps(response_message) 
        

    return render_template('signup.html') 






def add_user(email, password): 
    try:
        with sqlite3.connect("C:/Users/Akshay Agarwal/Desktop/Route-Mobile-Travel-Guide/app/users.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                INSERT INTO users (email, password) values (?, ?);
                """, (email, password,))
            result = {
                'code': 1, 
                'message': 'Account created!'
            }
    except:
        result = {
            'code': 0, 
            'message': 'Error, account not created'
        }
    return result 


def check_if_user_exists(email, password): 
    with sqlite3.connect("C:/Users/Akshay Agarwal/Desktop/Route-Mobile-Travel-Guide/app/users.db") as connection: 
        cursor = connection.cursor() 
        cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
        existing_email = cursor.fetchone() 
        if existing_email and existing_email[-1] == password: 
            return True 
        return False 

def check_if_auth_exists(auth): 
    with sqlite3.connect("C:/Users/Akshay Agarwal/Desktop/Route-Mobile-Travel-Guide/app/users.db") as connection: 
        cursor = connection.cursor() 
        cursor.execute("SELECT * FROM users WHERE password = ?", (auth,))
        existing_password = cursor.fetchone() 
        if existing_password: 
            return True 
        else:
            return False 
    
