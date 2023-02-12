import Posts from "./Posts";
import React from "react";

const Result = (posts) => {
  return (
    <div className="">
      {!posts.Posts.length ? (
        <h1>No posts found</h1>
      ) : (
        <Posts title={posts.title} comments={posts.body} />
      )}
    </div>
  );
};

export default Result;
