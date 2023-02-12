import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react"; // eslint-disable-line
import { Result } from "../Contants"; // eslint-disable-line
import fetchItem from "../FetchData/fetchItems";

const Items = () => {
  const [requestdata, setrequestData] = useState({
    title: "",
    body: "",
  }); // eslint-disable-line

  const results = useQuery(["items", requestdata], fetchItem);
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
          <Result posts={items} />
        </div>
      </div>
    </div>
  );
};

export default Items;
