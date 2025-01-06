from requests.auth import HTTPBasicAuth
from app.config import REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET

def get_reddit_auth():
    return HTTPBasicAuth(REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET)
