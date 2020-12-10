from server.models import User
from server.models.index import db

def createUser(data):
    try:
        user = User(name=data["name"], email=data["email"], password=data["password"])
        db.session.add(user)
        db.session.commit()
        return user
    except Exception as Error:
        print(Error)
        return "Error"

def getUserByID(_id):
    try:
        user = User.query.filter_by(id=_id).first()
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

def getUserByName(_name):
    _name = _name.lower()
    users = User.query.filter(User.name.contains(_name)).all()
    return users