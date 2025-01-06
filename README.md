# Reddit Search

A web application that allows users to search specific subreddits on Reddit and find posts containing certain keywords. <br/>
This project is built using FastAPI for the backend and React for the frontend.

## Features

- Search posts in specific subreddits for keywords
- Fetches posts from Reddit using the Reddit API
- Frontend built with React and FastAPI backend
- Deployed on Railway (backend) and Vercel (frontend)

## Tech Stack

- **Frontend**: React.js, TypeScript, React Router
- **Backend**: FastAPI, Python
- **API**: Reddit API for fetching subreddit data
- **Deployment**:
  - Frontend: Vercel
  - Backend: Railway
- **CORS**: Configured to allow requests from the frontend on Vercel

## Frontend

The frontend is built with React and TypeScript. It allows users to search for posts in a specific subreddit that contain certain keywords.

### Local Setup (Frontend)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reddit-search.git
   cd reddit-search/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set environment variables in a `.env` file:
   ```env
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Build & Deploy (Frontend)

To build the project for production:
```bash
npm run build
```

Deploy the built project to Vercel.

## Backend

The backend is built using FastAPI and is hosted on Railway. It acts as a bridge between the frontend and Reddit's API.

### Local Setup (Backend)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reddit-search.git -b main
   cd reddit-search/backend
   ```

2. Set up a Python virtual environment:
   ```bash
   python3 -m venv venv
   venv\Scripts\activate   
   # On mac/linux use `source venv/bin/activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set environment variables in a `.env` file:
   ```env
   cp .env.example .env
   ```

5. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```

6. Use Docker to run the FastAPI server and React frontend together:
   ```bash
   docker-compose up
   ```

### Deploy to Railway

1. Push the backend code to a GitHub repository.
2. Connect your GitHub repository to Railway for automatic deployment.
3. Configure environment variables in the Railway dashboard:
   - `REDDIT_CLIENT_ID`
   - `REDDIT_CLIENT_SECRET`
   - `REDDIT_REDIRECT_URI`
   - `REDDIT_USER_AGENT`

## How It Works

### Frontend

The frontend allows users to:
- Enter a subreddit name and a keyword.
- Search for posts containing that keyword in the given subreddit.
- Display results from Reddit's API.

### Backend

The backend handles the Reddit OAuth process and serves as a proxy to avoid exposing sensitive credentials. It:
- Requests an access token from Reddit using OAuth.
- Fetches posts from Reddit based on the user’s search criteria (subreddit and keyword).
- Responds with the results to the frontend.

## Environment Variables

You will need to configure the following environment variables:

### Backend
- `REDDIT_CLIENT_ID`: Your Reddit app's client ID
- `REDDIT_CLIENT_SECRET`: Your Reddit app's client secret
- `REDDIT_REDIRECT_URI`: The redirect URI for your app (e.g., `http://localhost:3000/oauth/callback`)
- `REDDIT_USER_AGENT`: A user-agent string for your app (e.g., `RedditKeywordBrowser/1.0`)

### Frontend
- `REACT_APP_BACKEND_URL`: The URL of your backend (e.g., `https://localhost:8000`)

## License

This project is licensed under the [MIT](https://opensource.org/license/mit) License