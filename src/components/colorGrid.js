import React from 'react';
import Tile from './Tile.js';
import './colorgrid.css';

const ColorGrid = () => {
  return (
    <div className="color-grid">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
};

export default ColorGrid;
