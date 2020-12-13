from server.app import app
from server.services import employee

from flask import request, jsonify
import re 

"""
/api/employee/add
/api/employee/employees
/api/employee/business
"""
@app.route('/api/employee/add', methods = ['POST'])
def addEmployee():
    if request.method == 'POST' and 'businessID' in request.json and 'first_name' in request.json and 'last_name' in request.json and 'email' in request.json:
        businessID = request.json['businessID'].lower()
        first_name = request.json['first_name'].lower()
        last_name = request.json['last_name'].lower()
        email = request.json['email'].lower()

        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify(msg='Invalid email address!', sucess=False)

        if employee.checkEmail(businessID, email):
            return jsonify(msg='Already added this employee!', sucess=False)
        
        data = { "businessID": businessID, "first_name": first_name, "last_name": last_name, "email": email }

        Employee = employee.addEmployee(data)

        result = {"email": Employee.employeeEmail, "businessID": Employee.businessID, "first_name": Employee.first_name, "last_name": Employee.last_name}
        
        return jsonify(sucess=True, data=result)
        

    return jsonify(sucess=False, msg='Fill out all fields!')

@app.route('/api/employee/employees', methods = ['GET'])
def getAllEmployees():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('businessID'):
        businessID = query_parameters.get('businessID').lower()

        Employees = employee.getAllEmployees(businessID)
        
        data = []

        for index in range(len(Employees)):
            data.append({ "email": Employees[index].employeeEmail, "first_name": Employees[index].first_name, "last_name": Employees[index].last_name})

    return jsonify(businessID=businessID, results=data)

@app.route('/api/employee/business', methods = ['GET'])
def getRestaurant():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('userID'):
        userID = query_parameters.get('userID')
        Employee = employee.getUserPlaceOfEmployment(userID)

    return jsonify(businessID=Employee.businessID)

@app.route('/api/employee/remove', methods = ['DELETE'])
def removeEmployee():
    query_parameters = request.args

    if request.method == 'DELETE' and query_parameters.get('email') and query_parameters.get('businessID'):

        email = query_parameters.get('email').lower()
        businessID = query_parameters.get('businessID').lower()

        if employee.checkEmail(businessID, email):
            employee.deleteEmployee(businessID, email)
        
        return jsonify(sucess=False, msg="Employee does not Exist!")

    return jsonify(sucess=False, msg="Fill out all fields!")