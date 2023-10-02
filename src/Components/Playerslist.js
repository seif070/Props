import React from "react";

import player from "./player"
import Player from './Players'

function Playerslist () {
  return (

      <div style={{display:'flex',justifyContent:'space-around'}}>
        {player.map((el) => (
          <Player min={el} 
          />
))}
          </div>

    );
  };

  export default Playerslist;