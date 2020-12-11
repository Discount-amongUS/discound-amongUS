# Server

1. make virtual env:
    https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/

2. install requirements.txt:
    pip install -r requirements.txt

3. run this command to make package:
    pip install -e .

4. make .env file in the following dir server/config/
    The .env should have the following virables with your postgres info

    Example: 
    
    POSTGRES_URL="127.0.0.1:5432"
    POSTGRES_USER="postgres"
    POSTGRES_PW="password"
    POSTGRES_DB="amongus"

5. run server:
    a. cd server
    b. python app.py
