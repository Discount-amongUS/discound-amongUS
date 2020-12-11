from server.app import app
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy(app)

from .user import User
from .business import Business
from .employee import Employee

db.create_all()
db.session.commit()