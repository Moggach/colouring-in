import React, { useState } from 'react';
const randomColor = require('randomcolor');

const Tile = () => {
  let [color, setColor] = useState(``);

  return (
    <div className="container">
      <button onClick={() => setColor((color = randomColor()))}>
        Get me new colours!
      </button>
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
