import { Link } from "react-router-dom";
import React from "react";

const Posts = (props) => {
  const { title, body, id } = props;

  return (
    <Link>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default Posts;
