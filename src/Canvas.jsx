import React from 'react';
import TriangleBulgeFractal from './TriangleBulgeFractal';


export default function Canvas() {
  const style = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  };

  return (
    <svg style={style} viewBox="0 0 100 100">
      { /* Change this to the fractal you want to test */ }
      <TriangleBulgeFractal />
    </svg>
  );
}