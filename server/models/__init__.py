from .index import db
from .user import User
from .business import Business
from .employee import Employee

db.create_all()
db.session.commit()