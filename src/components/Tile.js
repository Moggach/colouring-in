import React, { useState } from 'react';
const randomColor = require('randomcolor');

const Tile = () => {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="container">
      <button onClick={() => setColor(randomColor())}>Update</button>

      <div className="color-grid">
        <div
          className="box box-1"
          style={{
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tile;
