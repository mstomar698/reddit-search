import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import PostCard from "../components/PostCard";
import { searchPosts } from "../api";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const handleSearch = async (subreddit: string, keyword: string) => {
    try {
      const data = await searchPosts(subreddit, keyword);
      setPosts(data.data.children.map((child: any) => child.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reddit Keyword Browser</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="mt-4">
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            title={post.title}
            url={post.url}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
