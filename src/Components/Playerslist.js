import React from "react";
import Player from "./player";
import PlayersData from "./Players";


function Playerslist () {
  return (

      <div>
        {Player.map((player, index) => (
          <PlayersData player={player} 
          />
))}
          </div>

    );
  };
  
  export default Playerslist;
  