from server.app import app
from server.services import employee

from flask import request, jsonify

@app.route('/api/employee/add', methods = ['POST'])
def addEmployee():
    if request.method == 'POST' and 'restaurant' in request.json and 'employee' in request.json:
        pass
    return jsonify()

@app.route('/api/employee/get', methods = ['GET'])
def getAllEmployees():
    pass