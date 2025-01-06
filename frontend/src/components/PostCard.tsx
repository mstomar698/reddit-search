import React from "react";

interface PostCardProps {
  title: string;
  url: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, url, author }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>Posted by: {author}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Post
      </a>
    </div>
  );
};

export default PostCard;
