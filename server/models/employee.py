from . import db

class Employee(db.Model):
    employeeID = db.Column(db.Integer, primary_key=True)
    businessID = db.Column(db.String(120), db.ForeignKey('business.businessID'))
    employeeEmail = db.Column(db.String(120), nullable=False)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Employee %r>' % self.employeeID