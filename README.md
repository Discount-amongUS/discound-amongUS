# Discount Amongus


## Overview

Discount AmongUs is made to use for local businesses that own different locations. Usually, an employee can get a discount at any location under the same company and it should apply the same in the restaurant industry as well. However, there is no single application out there that does this job yet. From a personal experience, it felt like there should be one for restaurant businesses and their employees. Because workers from location A do not know workers from location B so that it is hard to recognize each other and ask for a discount even though they work for the same company. Hence, there should be a convenient way of recognizing each other for a discount. In order to solve this problem, our group came up with this app called Discount AmongUs, which is simple and convenient to use for both sides. Employees get registered by their store manager and pull up their phones for a discount in different locations and get verified with their email, which shows their place of work. Owners can add and remove store managers and store managers can add and remove their employees.


## Getting Started

`Client`:
1. npm install
2. npm start

`Server`:
1. make virtual env:
    https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/

2. activate the virtual env you created

3. install requirements.txt:
    pip install -r requirements.txt

4. run this command to make package on the root dir:
    pip install -e .

5. make .env file in the following dir server/config/
    The .env should have the following virables with your postgres info

    Example: 
    
    POSTGRES_URL="127.0.0.1:5432"
    POSTGRES_USER="postgres"
    POSTGRES_PW="password"
    POSTGRES_DB="amongus"

6. run server:
    a. cd server
    b. python app.py



## Requirements

For Server The following is `Required`:

```python
Flask==1.1.2
Flask-SQLAlchemy==2.4.1
flask-cors
python-dotenv
pyjwt==1.4.2
Psycopg2==2.8.4
SQLAlchemy==1.3
```

For Client The following is `Required`:

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.0",
    "bootstrap": "^4.5.3",
    "jwt-decode": "^3.1.2",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.0",
    "web-vitals": "^0.2.4"
}
```

## Data Model

The application will store user, items, and orders.

- Users can have many businesses.
- Business can have many employees.
- Employees can work for multiple businesses.


An Example `User`:

```javascript
{
    email: "test@test.com",
    first_name: "first",
    userID: 1,
    last_name: "last"
}
```

An Example `Business`:

```javascript
{
    address: "123 lex ave",
    city: "new york",
    name: "test",
    owner: 1, // References a userID
    state: "new york",
    zipcode: 12345,
    businessID: "test-id"
}
```

An Example `Business Employees`:

```javascript
{
    businessID: "123-jkl", // References a businessID 
    results: [
        {
            email: "test2@test.com",
            first_name: "first",
            last_name: "last"
        },
        {
            email: "test3@test.com",
            first_name: "first",
            last_name: "last"
        }
    ]
}
```

## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

## User Stories or Use Cases

1. As a user, I can signup to be owner
2. As a user, I can login
3. As an owner, I can add business
4. As an owner, I can remove business 
5. As an owner, I can add employees 
6. As an owner, I can remove employees
7. As an owner, I can view my businesses 
8. As an employee, I can check for discounts

## References Used

1. https://github.com/Fall-2020-Website-Design/FindLoveNow
2. https://dev.to/aminu_israel/using-json-web-token-jwt-with-python-3n4p
3. https://pyjwt.readthedocs.io/en/stable/
4. https://flask-sqlalchemy.palletsprojects.com/en/2.x/queries/#querying-records
5. https://github.com/Sanjeev-Thiyagarajan/PERN-STACK-DEPLOYMENT

## Authors
Edgar
Dor
Hyunmin