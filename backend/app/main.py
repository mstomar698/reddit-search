from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from app.routers import reddit

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://reddit-search-three.vercel.app", "http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

app.include_router(reddit.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Reddit Keyword Browser Backend!"}
