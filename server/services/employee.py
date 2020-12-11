from server.models import Employee
from server.models.index import db


def addEmployee(data):
    try:
        employee = Employee(businessID=data["businessID"], userID=data["userID"])
        db.session.add(employee)
        db.session.commit()
        return employee
    except Exception as Error:
        print(Error)
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