import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);


  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          setLocations(response.data.results);
          console.log(response.data.results);
        })
        .catch(error => {
          console.log('error', error);
        })
    }, []);

    return (
      <section className="location-list">
        {locations.map(location =>
         <LocationCard location={location} />)}
      </section>
    );

}
