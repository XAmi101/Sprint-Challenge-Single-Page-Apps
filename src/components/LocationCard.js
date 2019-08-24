import React from "react";
import { Card } from "semantic-ui-react";
import  "semantic-ui-css//semantic.min.css";


// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;


export default function LocationCard({location}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Meta>{location.type}</Card.Meta>
        <Card.Description>{location.dimension}</Card.Description>
      </Card.Content>
    </Card>
  );
}
