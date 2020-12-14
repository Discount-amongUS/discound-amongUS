from . import db

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    businessID = db.Column(db.String(120), nullable=False)
    owner = db.Column(db.Integer, db.ForeignKey('user.userID'))
    name = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    city = db.Column(db.String(120), nullable=False)
    state = db.Column(db.String(120), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Business %r>' % self.businessID
