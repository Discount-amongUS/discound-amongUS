from server.models import Employee
from server.models.index import db


def addEmployee(data):
    try:
        employee = Employee(restaurant=data["restaurantID"], employee=data["userID"])
        db.session.add(employee)
        db.session.commit()
        return employee
    except Exception as Error:
        print(Error)
        return "Error"


def getAllEmployees(_restaurantID):
    try:
        employees = Employee(restaurant=_restaurantID)
        return employees
    except Exception as Error:
        print(Error)
        return "Error"
