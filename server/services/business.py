from server.models import Business
from server.models import db

def createBusiness(data):
    try:
        business = Business(owner=data["owner"], name=data["name"], address=data["address"], city=data["city"], state=data["state"], zipcode=data["zipcode"], businessID=data["businessID"])
        db.session.add(business)
        db.session.commit()
        return business
    except Exception as Error:
        return "Error"

def findBusinessByID(_id):
    try:
        business = Business.query.filter_by(businessID=_id).first()
        return business
    except Exception as Error:
        print(Error)
        return "Error"

def findBusinessByName(_name):
    try:
        _name = _name.lower()
        business = Business.query.filter(Business.name.contains(_name)).all()
        return business
    except Exception as Error:
        print(Error)
        return "Error"


def findBusinessByZipcode(_zipcode):
    try:
        businesses = Business.query.filter_by(zipcode=_zipcode).all()
        return businesses
    except Exception as Error:
        print(Error)
        return "Error"

def findBusinessByCity(_city):
    try:
        businesses = Business.query.filter_by(city=_city).all()
        return businesses
    except Exception as Error:
        print(Error)
        return "Error"

def findBusinessByState(_state):
    try:
        businesses = Business.query.filter_by(state=_state).all()
        return businesses
    except Exception as Error:
        print(Error)
        return "Error"

def findBusinessByAddress(_address):  
    try:
        business = Business.query.filter_by(address=_address).first()
        return business
    except Exception as Error:
        print(Error)
        return "Error"

def findBusinessByOwner(_owner):  
    try:
        businesses = Business.query.filter_by(owner=_owner).all()
        return businesses
    except Exception as Error:
        print(Error)
        return "Error"

def checkBusinessAddress(_address):  
    try:
        business = Business.query.filter_by(address=_address).first()
        if business: return True
        return False
    except Exception as Error:
        print(Error)
        return False

def checkBusinessByID(_id):
    try:
        business = Business.query.filter_by(businessID=_id).first()
        if business: return True
        return False
    except Exception as Error:
        return False


def deleteBusiness(_id, _owner):
    try:
        business = Business.query.filter_by(businessID=_id, owner=_owner).one()
        print(business.businessID)
        db.session.delete(business)
        db.session.commit()
    except Exception as Error:
        return Error