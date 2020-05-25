import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  return (
    <div className="Box" style={{ backgroundColor: `${r} ${g} ${b}` }}>
      <p>
        rgb({r} {g} {b})
      </p>
    </div>
  );
};

export default BoxColor;
