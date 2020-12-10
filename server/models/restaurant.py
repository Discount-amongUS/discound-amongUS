from .index import db

class Restaurant(db.Model):
    restaurantID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    owner = db.Column(db.Integer, db.ForeignKey('user.id'))
    type = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Restaurant %r>' % self.restaurantID
