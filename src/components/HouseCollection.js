import React from "react";
import HouseCard from "./HouseCard";
import { Card } from "semantic-ui-react";

function HouseCollection({ houses }) {
  const cards = houses.map((house) => (
    <houseCard key={house.id} house={house} />
  ));

  return <Card.Group itemsPerRow={6}>{cards}</Card.Group>;
}

export default HouseCollection;