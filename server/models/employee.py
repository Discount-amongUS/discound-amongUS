from .index import db

class Employee(db.Model):
    employeeID = db.Column(db.Integer, primary_key=True)
    restaurant = db.Column(db.Integer, db.ForeignKey('restaurant.restaurantID'))
    employee = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Employee %r>' % self.employeeID