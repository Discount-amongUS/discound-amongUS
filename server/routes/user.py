from server.app import app
from server.services import user

from flask import request, jsonify
import hashlib
import re 

@app.route('/api/user/register', methods = ['GET', 'POST'])
def register():
    if request.method == 'POST' and 'first_name' in request.json and 'last_name' in request.json and 'email' in request.json \
    and 'password' in request.json and 'password2' in request.json:

        email = request.json['email']
        first_name = request.json['first_name']
        last_name = request.json['last_name']
        password = request.json['password']
        password2 = request.json['password2']

        if password != password2:
            return jsonify(msg='Passwords do not match!', sucess=False)

        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify(msg='Invalid email address!', sucess=False)

        emailExist = user.checkEmail(email)

        if emailExist:
            return jsonify(msg='Account already exists!', sucess=False)

        password = hashlib.md5(password.encode()).hexdigest()

        data = {
            "email": email.lower(),
            "first_name": first_name.lower(),
            "last_name": last_name.lower(),
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

        token = User.encode_auth_token(User.userID)
        # print(User.decode_auth_token(token))
        
        return jsonify(msg='Welcome!', sucess=True, token=str(token))

    return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/user', methods = ['GET', 'POST'])
def getUser():
    query_parameters = request.args
    if request.method == 'GET' and query_parameters.get('id'):
        _id = query_parameters.get('id')
        User = user.getUserByID(_id)

    return jsonify(userID=User.userID, email=User.email, first_name=User.first_name, last_name=User.last_name)

# dont think this is needed but might be useful
@app.route('/api/user/search', methods = ['GET', 'POST'])
def lookUserUp():
    query_parameters = request.args
    if request.method == 'GET' and (query_parameters.get('email') or (query_parameters.get('first_name') and query_parameters.get('last_name'))):
        email = query_parameters.get('email')
        first_name = query_parameters.get('first_name')
        last_name = query_parameters.get('last_name')
        
        if email:
            User = user.getUserByEmail(email)
            return jsonify(userID=User.userID, email=User.email, name=User.name)

        if first_name and last_name:
            Users = user.getUserByName(first_name, last_name)
            data = []

            for index in range(len(Users)):
                entry = {"userID":Users[index].userID, "first_name":Users[index].first_name, "last_name":Users[index].last_name, "email":Users[index].email}    
                data.append(entry)

            return jsonify(data=data)


        