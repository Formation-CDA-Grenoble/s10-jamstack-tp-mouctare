import React from 'react';
// on ajour boustrap et card
import { Card, Image,  } from 'react-bootstrap';

const RestoPreview = ({ name, adress, phone_number,  description, cover }) =>
  <Card>
    <Card.Header as="h3">
      {name}
    </Card.Header>
    <Card.Header as="h3">
      {adress}
    </Card.Header>
    <Card.Header as="h3">
      {phone_number}
    </Card.Header>
    <Card.Body>
       <Image src={cover} fluid />
      {description}
      <div>
      <button variant = "primary"> Read more ...</button>
      </div>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>


export default RestoPreview;
