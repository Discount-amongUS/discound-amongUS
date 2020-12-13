from server.models import Employee
from server.models import db


def addEmployee(data):
    try:
        employee = Employee(businessID=data["businessID"], first_name=data["first_name"], last_name=data["last_name"], employeeEmail=data["email"])
        db.session.add(employee)
        db.session.commit()
        return employee
    except Exception as Error:
        return "Error"


def getAllEmployees(_businessID):
    try:
        employees = Employee.query.filter_by(businessID=_businessID).all()
        return employees
    except Exception as Error:
        print(Error)
        return "Error"

def getUserPlaceOfEmployment(_userID):
    try:
        employee = Employee.query.filter_by(userID=_userID).first()
        return employee
    except Exception as Error:
        print(Error)
        return "Error"

def checkEmail(_businessID, _email):
    try:
        employee = Employee.query.filter_by(businessID=_businessID, employeeEmail=_email).first()
        print(employee)
        if employee: return True
        return False
    except Exception as Error:
        print(Error)
        return "Error"

def deleteEmployee(_businessID, _email):
    try:
        employee = Employee.query.filter_by(businessID=_businessID, employeeEmail=_email).first()
        db.session.delete(employee)
        db.session.commit()
    except Exception as Error:
        print(Error)
        return "Error"