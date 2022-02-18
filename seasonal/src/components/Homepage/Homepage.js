import React from "react";
import { useFetch } from "../hooks/useFetch.js";

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

function Homepage() {
  const [data] = useFetch(`${api}/ingredients`);
  console.log(data.payload.name);

  if (data) {
    return (
      <>
        <h1>Hello again!</h1>
        <h1>{data.payload.name}</h1>
      </>
    );
  } else {
    return <h1>Hello again!</h1>;
  }
}

export default Homepage;
