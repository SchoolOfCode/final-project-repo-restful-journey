import React, { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const api = process.env.REACT_APP_API_CALL;

function Favourites() {
  const id = 117441255094162799546;
  const url = `${api}/users/favourites/${id}`;

  const [favourites, setFavourites] = useState(null);
  const [data] = useFetch(
    `https://nourish-seasonal.herokuapp.com/users/favourites/117441255094162799546`
  );
  useEffect(() => {
    if (data) {
      setFavourites(data);
      console.log(data.payload[0].favourites);
    }
  }, [data]);

  return <div>Favourites</div>;
}

export default Favourites;
