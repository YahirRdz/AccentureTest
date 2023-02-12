import { Link } from "react-router-dom"; // eslint-disable-line
import React from "react"; // eslint-disable-line

const Posts = (props) => {
  const { name, body, email, id } = props;

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h2>{name}</h2>
        <h3>{email}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default Posts;
