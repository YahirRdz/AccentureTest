import { useQuery } from "@tanstack/react-query"; // eslint-disable-line
import React from "react"; // eslint-disable-line
import { Result } from "../Contants"; // eslint-disable-line
import fetchItem from "../FetchData/fetchItems"; // eslint-disable-line

const Items = (items) => {
  const { data, error, isError, isLoading } = useQuery("users", fetchItem);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error! {error.message}</div>;

  // const [requestdata, setrequestData] = useState({
  //   title: "",
  //   body: "",
  // }); // eslint-disable-line

  // const results = useQuery(["items", requestdata], fetchItem);
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-center">
          <ul className="flex gap-4">
            <li>All</li>
            <li>Travel</li>
            <li>Lifestyle</li>
            <li>Bussiness</li>
            <li>Food</li>
            <li>Work</li>
          </ul>
        </div>
        {/* grid */}
        <div>
          <div className="grid">
            {data.map((posts, id) => {
              return (
                <div key={id} className="mb-20 w-8">
                  <h1>{posts.title}</h1>
                  <p>{posts.body}</p>
                </div>
              );
            })}
          </div>
          <Result posts={items} />
        </div>
      </div>
    </div>
  );
};

export default Items;
