from server.models import Restaurant
from server.models.index import db

def createRestaurant(data):
    try:
        restaurant = Restaurant(owner=data["owner"], name=data["name"], address=data["address"], city=data["city"], state=data["state"], type=data["type"])
        db.session.add(restaurant)
        db.session.commit()
        return restaurant
    except Exception as Error:
        print(Error)
        return "Error"

def findRestaurantByID(_id):
    try:
        restaurant = Restaurant.query.filter_by(restaurantID=_id).first()
        return restaurant
    except Exception as Error:
        print(Error)
        return "Error"


def findRestaurantByName(_name):
    try:
        _name = _name.lower()
        restaurants = Restaurant.query.filter(Restaurant.name.contains(_name)).all()
        return restaurants
    except Exception as Error:
        print(Error)
        return "Error"


def findRestaurantByType(_type):
    try:
        restaurants = Restaurant.query.filter_by(type=_type).all()
        return restaurants
    except Exception as Error:
        print(Error)
        return "Error"

def findRestaurantByCity(_city):
    try:
        restaurants = Restaurant.query.filter_by(city=_city).all()
        return restaurants
    except Exception as Error:
        print(Error)
        return "Error"

def findRestaurantByState(_state):
    try:
        restaurants = Restaurant.query.filter_by(state=_state).all()
        return restaurants
    except Exception as Error:
        print(Error)
        return "Error"

def findRestaurantByAddress(_address):  
    try:
        restaurant = Restaurant.query.filter_by(address=_address).first()
        return restaurant
    except Exception as Error:
        print(Error)
        return "Error"

def findRestaurantByOwner(_owner):  
    try:
        restaurants = Restaurant.query.filter_by(owner=_owner).all()
        return restaurants
    except Exception as Error:
        print(Error)
        return "Error"

def checkRestaurantAddress(_address):  
    try:
        restaurant = Restaurant.query.filter_by(address=_address).first()
        print(restaurant)
        if restaurant: return True
        return False
    except Exception as Error:
        print(Error)
        return False
