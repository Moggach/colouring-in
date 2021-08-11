import React from 'react';

const randomColor = require('randomcolor');

const Colors = () => {
  let color1 = randomColor();
  let color2 = randomColor();
  let color3 = randomColor();
  let color4 = randomColor();

  return (
    <div className="color-grid">
      <div
        className="box box-1"
        style={{
          backgroundColor: `${color1}`,
        }}
      ></div>
      <div
        className="box box-2"
        style={{
          backgroundColor: `${color2}`,
        }}
      ></div>
      <div
        className="box box-3"
        style={{
          backgroundColor: `${color3}`,
        }}
      ></div>
      <div
        className="box box-4"
        style={{
          backgroundColor: `${color4}`,
        }}
      ></div>
    </div>
  );
};

export default Colors;
