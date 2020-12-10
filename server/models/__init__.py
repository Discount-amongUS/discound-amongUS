from .index import db
from .user import User
from .restaurant import Restaurant
from .employee import Employee

db.create_all()
db.session.commit()