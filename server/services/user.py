from server.models import User
from server.models import db

def createUser(data):
    try:
        user = User(first_name=data["first_name"], last_name=data["last_name"], email=data["email"], password=data["password"])
        db.session.add(user)
        db.session.commit()
        return user
    except Exception as Error:
        return "Error"

def getUserByID(_id):
    try:
        user = User.query.filter_by(userID=_id).first()
        return user
    except Exception as Error:
        return "Error"

def getUserByEmail(_email):
    try:
        user = User.query.filter_by(email=_email).first()
        return user
    except Exception as Error:
        return "User does not exist"

def checkEmail(_email):
    try:
        user = User.query.filter_by(email=_email).first()
        if user:
            return True
    except Exception as Error:
        return False
    return False

def getUserByName(first_name, last_name):
    first_name = first_name.lower()
    last_name = last_name.lower()

    users = User.query.filter(User.first_name.contains(first_name)).all() + User.query.filter(User.last_name.contains(last_name)).all()
    data = []
    seen_users = set([])
    
    for user in users:
        if user.userID not in seen_users:
            data.append(user)
            seen_users.add(user.userID)

    return data