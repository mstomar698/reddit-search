from fastapi import FastAPI
from app.routers import reddit

app = FastAPI()

app.include_router(reddit.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Reddit Keyword Browser Backend!"}
