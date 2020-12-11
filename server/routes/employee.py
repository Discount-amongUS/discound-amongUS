from server.app import app
from server.services import employee

from flask import request, jsonify

"""
/api/employee/add
/api/employee/
/api/employee/place_of_employment
"""
@app.route('/api/employee/add', methods = ['POST'])
def addEmployee():
    if request.method == 'POST' and 'businessID' in request.json and 'userID' in request.json:
        pass
    return jsonify()

@app.route('/api/employee/employees', methods = ['GET'])
def getAllEmployees():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('businessID'):
        pass
    return jsonify()

@app.route('/api/employee/business', methods = ['GET'])
def getRestaurant():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('userID'):
        pass
    return jsonify()