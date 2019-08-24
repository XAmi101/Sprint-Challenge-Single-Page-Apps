import React from "react";
import { Card, Image } from "semantic-ui-react";


// export default function CharacterCard(character) {
//   return <span>todo: character</span>;
// }
export default function CharacterCard ({character}) {
  return (
  <Card>
     <Image src={character.image} wrapped ui={false} />
     <Card.Content>
       <Card.Header>{character.name}</Card.Header>
       <Card.Meta>{`Created: ${character.created}`}</Card.Meta>
       <Card.Description>{character.species}</Card.Description>
      <Card.Description>{character.status}</Card.Description>
     </Card.Content>
     <Card.Content extra>
       <em>{character.origin.name}</em>
     </Card.Content>
   </Card>
  )
}
