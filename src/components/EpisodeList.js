import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard.js";
import axios from "axios";


export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodes(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log('error', error);
      })
  }, []);

  return (
    <section className="episode-list">
      {episodes.map(episode => <EpisodeCard  episode={episode} />)}
    </section>
  );
}
