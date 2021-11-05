from flask import render_template, request, abort, flash, redirect, url_for
from app import app
import json
import sqlite3


@app.route('/')
def index():
    if request.method == 'GET': 
        auth = request.args.get('auth', default='*', type = str) 
        print("AUTH", auth) 
        if(auth == 'abc123'):
            return render_template('logged.html') 
        return render_template('home.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST': 
        email = request.get_json()['email']
        password = request.get_json()['password'] 
        print(email,password) 
        response_message = {
            "code": 1, 
            "message": 'abc123'
        }

        return json.dumps(response_message) 

    return render_template('login.html') 
