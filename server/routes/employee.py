from server.app import app
from server.services import employee

from flask import request, jsonify

"""
/api/employee/add
/api/employee/employees
/api/employee/place_of_employment
"""
@app.route('/api/employee/add', methods = ['POST'])
def addEmployee():
    if request.method == 'POST' and 'businessID' in request.json and 'userID' in request.json:
        businessID = request.json['businessID']
        userID = request.json['userID']
        
        data = {"userID": userID, "businessID":businessID}

        Employee = employee.addEmployee(data)
        
        return jsonify(sucess=True, businessID=Employee.businessID, userID=Employee.userID)
        

    return jsonify(sucess=False, msg='Fill out all fields!')

@app.route('/api/employee/employees', methods = ['GET'])
def getAllEmployees():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('businessID'):
        businessID = query_parameters.get('businessID')
        Employees = employee.getAllEmployees(businessID)
        
        data = []

        for index in range(len(Employees)):
            data.append({"userID":Employees[index].userID})

    return jsonify(results=data)

@app.route('/api/employee/business', methods = ['GET'])
def getRestaurant():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('userID'):
        userID = query_parameters.get('userID')
        Employee = employee.getUserPlaceOfEmployment(userID)

    return jsonify(businessID=Employee.businessID)