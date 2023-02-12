import Posts from "./Posts"; // eslint-disable-line
import React from "react"; // eslint-disable-line

const Result = (posts) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!posts.Posts.length ? (
        <h1>Usuario no encontrado</h1>
      ) : (
        <Posts title={posts.title} comments={posts.body} />
      )}
    </div>
  );
};

export default Result;
