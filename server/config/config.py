from dotenv import load_dotenv
import os

project_folder = os.path.dirname(os.path.realpath(__file__))
load_dotenv(os.path.join(project_folder, '.env'))

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PW = os.getenv("POSTGRES_PW")
POSTGRES_URL = os.getenv("POSTGRES_URL")
POSTGRES_DB = os.getenv("POSTGRES_DB")


URL = 'postgresql+psycopg2://%s:%s@%s/%s' %(POSTGRES_USER, POSTGRES_PW, POSTGRES_URL, POSTGRES_DB)