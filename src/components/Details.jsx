import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPost from "../FetchData/fetchPost";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPost);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.postId} - ${pet.email} `}</h2>
        <p>{pet.body}</p>
      </div>
    </div>
  );
};

export default Details;
