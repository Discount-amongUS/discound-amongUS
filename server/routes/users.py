from server.app import app

@app.route('/api/')
def hello_world():
    return 'Hello, World!'