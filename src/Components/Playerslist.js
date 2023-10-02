import React from "react";
import Player from "./player";
import PlayersData from "./Players";

function Playerslist() {
  return (

      <div>
        {PlayersData.map((player, index) => (
          <Player key={index} {...player} 
          />
))}
          </div>

    );
  };
  
  export default Playerslist;
  