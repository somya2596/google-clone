/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import API_KEY from "./Keys";

const CONTEXT_KEY = "your context key";

//making custom hook
//here term is data layer variable which we will search
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData()
      .then((res) => {
        console.log("response*************", res);
      })
      .catch((error) => {
        console.log("error*************", error);
      });
  }, [term]);

  return { data };
};

export default useGoogleSearch;
