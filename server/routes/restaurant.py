from server.app import app
from server.services import restaurant

from flask import request, jsonify

# routes
# /api/restaurant/create                    - needs json body with name, type, address, city, state , owners userID
# /api/restaurant/get?id=                   - param id
# /api/restaurant/address?address=          - param address 
# /api/restaurant/city?city=                - param city
# /api/restaurant/state?state=              - param state
# /api/restaurant/type?type=                - param type
# /api/restaurant/owner?owner=              - param owner (userid)

@app.route('/api/restaurant/create', methods = ['POST'])
def createRestaurant():
    if request.method == 'POST' and 'name' in request.json and 'type' in request.json and 'address' in request.json and 'city' in request.json and 'state' in request.json:
        owner = request.json['userID']
        name = request.json['name'].lower()
        _type = request.json ['type'].lower()
        address = request.json['address'].lower()
        city = request.json['city'].lower()
        state = request.json['state'].lower()
        
        if restaurant.checkRestaurantAddress(address):
            return jsonify(msg='Address is taken!', sucess=False)

        data = { "owner":owner, "name": name, "type": _type, "address":address, "city":city, "state":state }

        restaurant.createRestaurant(data)
        return jsonify(msg='success!', sucess=True)

    else:
        return jsonify(msg='Fil out all fields!', sucess=False)


@app.route('/api/restaurant/get', methods = ['GET'])
def getRestaurantByID():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('id'):
        _id = query_parameters.get('id')
        Restaurant = restaurant.findRestaurantByID(_id)
        return jsonify(id=Restaurant.restaurantID, owner=Restaurant.owner, name=Restaurant.name, address=Restaurant.address, city=Restaurant.city, state=Restaurant.state)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/address', methods = ['GET'])
def getRestaurantByAddress():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('address'):
        address = query_parameters.get('address')
        Restaurant = restaurant.findRestaurantByAddress(address)
        return jsonify(id=Restaurant.restaurantID, owner=Restaurant.owner, name=Restaurant.name, address=Restaurant.address, city=Restaurant.city, state=Restaurant.state)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/name', methods = ['GET'])
def getRestaurantByName():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('name'):
        name = query_parameters.get('name')
        Restaurants = restaurant.findRestaurantByName(name)
        data =[]
        for index in range(len(Restaurants)):
            rest = {"id":Restaurants[index].restaurantID, "owner":Restaurants[index].owner, "name":Restaurants[index].name, "address":Restaurants[index].address, "city":Restaurants[index].city, "state":Restaurants[index].state}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/city', methods = ['GET'])
def getRestaurantByCity():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('city'):
        city = query_parameters.get('city')
        Restaurants = restaurant.findRestaurantByCity(city)
        data =[]
        for index in range(len(Restaurants)):
            rest = {"id":Restaurants[index].restaurantID, "owner":Restaurants[index].owner, "name":Restaurants[index].name, "address":Restaurants[index].address, "city":Restaurants[index].city, "state":Restaurants[index].state}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/state', methods = ['GET'])
def getRestaurantByState():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('state'):
        state = query_parameters.get('state')
        Restaurants = restaurant.findRestaurantByState(state)
        data =[]
        for index in range(len(Restaurants)):
            rest = {"id":Restaurants[index].restaurantID, "owner":Restaurants[index].owner, "name":Restaurants[index].name, "address":Restaurants[index].address, "city":Restaurants[index].city, "state":Restaurants[index].state}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/type', methods = ['GET'])
def getRestaurantByType():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('type'):
        _type = query_parameters.get('type')
        Restaurants = restaurant.findRestaurantByType(_type)
        data =[]
        for index in range(len(Restaurants)):
            rest = {"id":Restaurants[index].restaurantID, "owner":Restaurants[index].owner, "name":Restaurants[index].name, "address":Restaurants[index].address, "city":Restaurants[index].city, "state":Restaurants[index].state}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/restaurant/owner', methods = ['GET'])
def getRestaurantByOwner():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('owner'):
        owner = query_parameters.get('owner')
        Restaurants = restaurant.findRestaurantByOwner(owner)
        data =[]
        for index in range(len(Restaurants)):
            rest = {"id":Restaurants[index].restaurantID, "owner":Restaurants[index].owner, "name":Restaurants[index].name, "address":Restaurants[index].address, "city":Restaurants[index].city, "state":Restaurants[index].state}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)
