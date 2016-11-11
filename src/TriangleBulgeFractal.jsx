import React from 'react';

export default function TriangleBulgeFractal() {
  return (
    <g transform="translate(50, 60)">
      <Triangle depth={3} />
    </g>
  );
}

function Triangle({ depth }) {
  const style = {
    fill: 'rgba(0, 0, 0, 1)',
    //fill: `hsl(${depth * 30}, 60%, 50%)`,
  };

  const children = depth > 0 ?
    (
      <g>
        <g transform="translate(-29, 4) scale(0.4) rotate(-31)">
          <Triangle depth={depth - 1} />
        </g>
        <g transform="translate(29, 4) rotate(31) scale(0.4)">
          <Triangle depth={depth - 1} />
        </g>
      </g>
    ) : null;

  return (
    <g>
      <path d="M-50 30 L 0 0 L 50 30 Z" style={style} />
      { children }
    </g>
  );
}
