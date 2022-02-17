import React from "react";
import { useFetch } from "../hooks/useFetch.js";

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = "https://uselessfacts.jsph.pl/random.json?language=en";

function Homepage() {
  const [data] = useFetch(api);
  console.log(data);

  if (data) {
    return (
      <>
        <h1>Hello again!</h1>
        <h1>{data.text}</h1>
      </>
    );
  } else {
    return <h1>Hello again!</h1>;
  }
}

export default Homepage;
