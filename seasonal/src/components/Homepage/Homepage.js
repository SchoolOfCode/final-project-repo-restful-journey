import React from "react";
import { useFetch } from "../hooks/useFetch.js";

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;
// const api = "https://nourish-seasonal.herokuapp.com";

function Homepage() {
  const [data] = useFetch(`${api}/ingredients`);
  console.log(data);

  if (data) {
    return (
      <>
        <h1>Hello again!</h1>
        {data.payload.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <img src={item.imgurl} alt={item.name}></img>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>Hello again!</h1>;
  }
}

export default Homepage;
