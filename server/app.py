from flask import Flask

from config import config
from models import *


app = Flask(__name__)
app.config['DEBUG'] = True

app.config['SQLALCHEMY_DATABASE_URI'] = config.URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

from routes import *

if __name__ == '__main__':
    app.run()