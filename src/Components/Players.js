import React from "react";
import Card from "react-bootstrap/Card";


function Player({min}) {

const { name, team, nationality, jerseyNumber, age, imageUrl } = min;

  return (


        <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br/>
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  export default Player;