import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function HouseCard({ house }) {
 

  const { name, distance, description, location, pickUrl} = house


  // add distance, description and location to 'Card'
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={pickUrl} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default HouseCard;

//should have a list of all the ghosts haunting it atm -> put inside a containter 