import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const Rating = (props) => {
  const children = props.children;

  return (
    <div>
      {[...Array(5)].map((star) => {
        return <FaRegStar size={50} />;
      })}
      <br />
      <FaStar size={50} />
    </div>
  );
};

export default Rating;
