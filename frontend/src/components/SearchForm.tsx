import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (subreddit: string, keyword: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [subreddit, setSubreddit] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(subreddit, keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Subreddit"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        className="border mb-2 p-2"
      />
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border mb-2 p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
