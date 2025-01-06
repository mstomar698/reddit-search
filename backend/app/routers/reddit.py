from fastapi import APIRouter, HTTPException, Form
import requests
from app.config import REDDIT_USER_AGENT, REDDIT_REDIRECT_URI
from app.dependencies import get_reddit_auth

router = APIRouter(
    prefix="/reddit",
    tags=["reddit"],
)

BASE_URL = "https://www.reddit.com"

@router.get("/search")
def search_posts(subreddit: str, keyword: str):
    headers = {"User-Agent": REDDIT_USER_AGENT}
    url = f"{BASE_URL}/r/{subreddit}/search.json?q={keyword}&restrict_sr=1"

    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Error fetching data from Reddit")

    return response.json()


@router.post("/token")
def exchange_token(code: str = Form(...)):
    url = "https://www.reddit.com/api/v1/access_token"
    auth = get_reddit_auth()
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDDIT_REDIRECT_URI,
    }
    headers = {"User-Agent": REDDIT_USER_AGENT}

    response = requests.post(url, auth=auth, data=data, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Error exchanging token")

    return response.json()