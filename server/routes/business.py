from server.app import app
from server.services import business

from flask import request, jsonify

"""
routes
/api/business/create                    - needs json body with name, type, address, city, state , owners userID
/api/business/get?id=                   - param id
/api/business/address?address=          - param address 
/api/business/city?city=                - param city
/api/business/state?state=              - param state
/api/business/type?type=                - param type
/api/business/owner?owner=              - param owner (userid)
"""

# @app.route('/api/business/', methods=['POST', 'GET'])
# def entry():
#     pass

@app.route('/api/business/create', methods = ['POST'])
def createBusiness():
    if request.method == 'POST' and 'name' in request.json and 'type' in request.json and 'address' in request.json and 'city' in request.json and 'state' in request.json:
        owner = request.json['userID']
        name = request.json['name'].lower()
        _type = request.json ['type'].lower()
        address = request.json['address'].lower()
        city = request.json['city'].lower()
        state = request.json['state'].lower()
        
        if business.checkBusinessAddress(address):
            return jsonify(msg='Address is taken!', sucess=False)

        data = { "owner":owner, "name": name, "type": _type, "address":address, "city":city, "state":state }

        business.createBusiness(data)
        return jsonify(msg='success!', sucess=True)

    else:
        return jsonify(msg='Fil out all fields!', sucess=False)


@app.route('/api/business/get', methods = ['GET'])
def getBusinessByID():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('id'):
        _id = query_parameters.get('id')
        Business = business.findBusinessByID(_id)
        return jsonify(id=Business.businessID, owner=Business.owner, name=Business.name, address=Business.address, city=Business.city, state=Business.state, type=Business.type)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/address', methods = ['GET'])
def getBusinessByAddress():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('address'):
        address = query_parameters.get('address').lower()
        Business = business.findBusinessByAddress(address)
        return jsonify(id=Business.businessID, owner=Business.owner, name=Business.name, address=Business.address, city=Business.city, state=Business.state, type=Business.type)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/name', methods = ['GET'])
def getBusinessByName():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('name'):
        name = query_parameters.get('name').lower()
        Businesses = business.findBusinessByName(name)
        data =[]
        for index in range(len(Businesses)):
            rest = {"id":Businesses[index].businessID, "owner":Businesses[index].owner, "name":Businesses[index].name, "address":Businesses[index].address, "city":Businesses[index].city, "state":Businesses[index].state, "type":Businesses[index].type }
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/city', methods = ['GET'])
def getBusinessByCity():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('city'):
        city = query_parameters.get('city').lower()
        Businesses = business.findBusinessByCity(city)
        data =[]
        for index in range(len(Businesses)):
            rest = {"id":Businesses[index].businessID, "owner":Businesses[index].owner, "name":Businesses[index].name, "address":Businesses[index].address, "city":Businesses[index].city, "state":Businesses[index].state, "type":Businesses[index].type }
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/state', methods = ['GET'])
def getBusinessByState():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('state'):
        state = query_parameters.get('state').lower()
        Businesses = business.findBusinessByState(state)
        data =[]
        for index in range(len(Businesses)):
            rest = {"id":Businesses[index].businessID, "owner":Businesses[index].owner, "name":Businesses[index].name, "address":Businesses[index].address, "city":Businesses[index].city, "state":Businesses[index].state, "type":Businesses[index].type}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/type', methods = ['GET'])
def getBusinessByType():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('type'):
        _type = query_parameters.get('type').lower()
        Businesses = business.findBusinessByType(_type)
        data =[]
        for index in range(len(Businesses)):
            rest = {"id":Businesses[index].businessID, "owner":Businesses[index].owner, "name":Businesses[index].name, "address":Businesses[index].address, "city":Businesses[index].city, "state":Businesses[index].state, "type":Businesses[index].type}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)

@app.route('/api/business/owner', methods = ['GET'])
def getBusinessByOwner():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('owner'):
        owner = query_parameters.get('owner')
        Businesses = business.findBusinessByOwner(owner)
        data =[]
        for index in range(len(Businesses)):
            rest = {"id":Businesses[index].businessID, "owner":Businesses[index].owner, "name":Businesses[index].name, "address":Businesses[index].address, "city":Businesses[index].city, "state":Businesses[index].state, "type":Businesses[index].type}
            data.append(rest)
        return jsonify(data)
    else:
        return jsonify(msg='Fil out all fields!', sucess=False)
