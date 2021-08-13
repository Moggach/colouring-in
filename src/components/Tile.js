import React, { useState } from 'react';
import './tile.css';
const randomColor = require('randomcolor');

const Tile = () => {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="container">
      <div
        className="tile"
        style={{
          backgroundColor: `${color}`,
        }}
      ></div>

      <button onClick={() => setColor(randomColor())}>Update me</button>
    </div>
  );
};

export default Tile;
