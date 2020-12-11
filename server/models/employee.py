from .index import db

class Employee(db.Model):
    employeeID = db.Column(db.Integer, primary_key=True)
    businessID = db.Column(db.Integer, db.ForeignKey('business.businessID'))
    userID = db.Column(db.Integer, db.ForeignKey('user.userID'))

    def __repr__(self):
        return '<Employee %r>' % self.employeeID