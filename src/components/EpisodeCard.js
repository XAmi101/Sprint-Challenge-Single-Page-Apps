import React from "react";
import { Card } from "semantic-ui-react";
import  "semantic-ui-css//semantic.min.css";


export default function EpisodeCard({episode}) {

  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>{`Created: ${episode.created}`}</Card.Meta>
        <Card.Description>{episode.air_date}</Card.Description>
        <Card.Description>{episode.episode}</Card.Description>
      </Card.Content>
    </Card>
  );
}
