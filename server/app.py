from flask import Flask
from flask_cors import CORS

from config import config
from models import *

# Initialize flask app for the example
app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True

app.config['SQLALCHEMY_DATABASE_URI'] = config.URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

from routes import *
from services import *


if __name__ == '__main__':
    app.run()