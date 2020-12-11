from .index import db

class User(db.Model):
    userID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    isLogged = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.name
