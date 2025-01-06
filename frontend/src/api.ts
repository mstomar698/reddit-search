import axios from "axios";

console.log(process.env.REACT_APP_BACKEND_URL);
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const searchPosts = async (subreddit: string, keyword: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reddit/search`, {
      params: { subreddit, keyword },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Reddit posts:", error);
    throw error;
  }
};
