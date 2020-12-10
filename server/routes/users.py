from server.app import app
from server.services import user

from flask import request, jsonify
import hashlib
import jwt
import re 

@app.route('/api/user/register', methods = ['GET', 'POST'])
def register():
    if request.method == 'POST' and 'name' in request.json and 'email' in request.json and 'password' in request.json:
        email = request.json['email']
        password = request.json['password']
        name = request.json['name']

        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify(msg='Invalid email address!', sucess=False)

        emailExist = user.checkEmail(email)

        if emailExist:
            return jsonify(msg='Account already exists!', sucess=False)

        password = hashlib.md5(password.encode()).hexdigest()
        data = {
            "email": email,
            "name": name,
            "password": password 
        }

        user.createUser(data)
        return jsonify(msg='Sucess!', sucess=True)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/user/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST' and 'email' in request.json and 'password' in request.json: 
        email = request.json['email']
        password = request.json['password']

        emailExist = user.checkEmail(email)

        if not emailExist:
            return jsonify(msg='Account does not exist!', sucess=False)
        
        User = user.getUserByEmail(email)

        if User.password != hashlib.md5(password.encode()).hexdigest():
            return jsonify(msg='Password is incorrect!', sucess=False)
        
        return jsonify(msg='Welcome!', sucess=True)

    return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/user', methods = ['GET', 'POST'])
def getUser():
    query_parameters = request.args
    if request.method == 'GET' and query_parameters.get('id'):
        _id = query_parameters.get('id')
        User = user.getUserByID(_id)

    return jsonify(id=User.id, email=User.email, name=User.name)

@app.route('/api/user/search', methods = ['GET', 'POST'])
def lookUserUp():
    query_parameters = request.args
    if request.method == 'GET' and (query_parameters.get('email') or query_parameters.get('name')):
        email = query_parameters.get('email')
        name = query_parameters.get('name')
        
        if email:
            User = user.getUserByEmail(email)
            return jsonify(id=User.id, email=User.email, name=User.name)

        if name:
            Users = user.getUserByName(name)
            data = []

            for index in range(len(Users)):
                entry = [Users[index].id, Users[index].name, Users[index].email]    
                data.append(entry)

            return jsonify(data=data)


        