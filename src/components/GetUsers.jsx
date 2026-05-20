import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUsers = () => {
  const [data, setData] = useState([]);
  const api = `https://dummyjson.com/users`;
  useEffect(() => {
    axios.get(api).then((data) => {
      setData(data?.data);
    });
  }, []);

  console.log(data);

  return <div></div>;
};

export default GetUsers;
