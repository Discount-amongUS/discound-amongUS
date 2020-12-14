from server.app import app
from server.services import employee
from server.services import business

from flask import request, jsonify
import re 

"""
/api/employee/add
/api/employee/employees
/api/employee/business
/api/employee/remove - params email and businessID
"""
@app.route('/api/employee/add', methods = ['POST'])
def addEmployee():
    if request.method == 'POST' and 'businessID' in request.json and 'first_name' in request.json and 'last_name' in request.json and 'email' in request.json:
        owner = request.json['userID']
        businessID = request.json['businessID'].lower()
        first_name = request.json['first_name'].lower()
        last_name = request.json['last_name'].lower()
        email = request.json['email'].lower()

        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify(msg='Invalid email address!', success=False)

        if employee.checkEmail(businessID, email):
            return jsonify(msg='Already added this employee!', success=False)

        # add check for request to be owner of business
        Business = business.findBusinessByID(businessID)
        print(Business)
        if not Business: 
            return jsonify(msg='Not a valid BLN!', success=False)

        if owner != Business.owner:
            return jsonify(msg='You can not add an Employee!', success=False)

        
        data = { "businessID": businessID, "first_name": first_name, "last_name": last_name, "email": email }

        Employee = employee.addEmployee(data)

        result = {"email": Employee.employeeEmail, "businessID": Employee.businessID, "first_name": Employee.first_name, "last_name": Employee.last_name}
        
        return jsonify(success=True, data=result)
        

    return jsonify(success=False, msg='Fill out all fields!')

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

    if request.method == 'GET' and query_parameters.get('email'):
        email = query_parameters.get('email').lower()

        if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify(msg='Invalid email address!', success=False)

        Employee = employee.getUserPlaceOfEmployment(email)

        if len(Employee) == 0:
            return jsonify(success=False, msg="Email was not found!")
        
        data = []
        for index in range(len(Employee)):
            data.append({  "businessID": Employee[index].businessID, "email": Employee[index].employeeEmail, "first_name": Employee[index].first_name, "last_name": Employee[index].last_name})

        return jsonify(results=data)

@app.route('/api/employee/remove', methods = ['DELETE'])
def removeEmployee():
    query_parameters = request.args

    if request.method == 'DELETE' and query_parameters.get('email') and query_parameters.get('businessID') and query_parameters.get('userID'):

        email = query_parameters.get('email').lower()
        businessID = query_parameters.get('businessID').lower()
        owner = int(query_parameters.get('userID'))

         # add check for request to be owner of business
        Business = business.findBusinessByID(businessID)

        if not Business: 
            return jsonify(msg='Not a valid BLN!', success=False)

        if owner != Business.owner:
            return jsonify(msg='You can not remove an Employee!', success=False)

        if employee.checkEmail(businessID, email):
            employee.deleteEmployee(businessID, email)
            return jsonify(success=True, msg="Employee has been removed!")
        
        return jsonify(success=False, msg="Employee does not Exist!")

@app.route('/api/employee/find', methods = ['GET'])
def findEmployee():
    query_parameters = request.args

    if request.method == 'GET' and query_parameters.get('email'):

        email = query_parameters.get('email').lower()

        Employee = employee.getUserPlaceOfEmployment(email)
        
        ids = []
        names = []
        for index in range(len(Employee)):
            ids.append(Employee[index].businessID)

        print(ids)
        
        if not Employee:
            return jsonify(success=False, msg="Employee does not Exist!")

        related = []
        for _id in ids:
            name = business.findBusinessByID(_id).name
            print(name)
            related.append(name)

        return jsonify(success=True, work=ids, names=related)