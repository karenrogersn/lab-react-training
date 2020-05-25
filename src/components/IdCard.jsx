import React from 'react';

import './IdCard.css';
//import App from './App'

const IdCard = (props) => {
  const lastName = props.lastName;
  const firstName = props.firstName;
  const gender = props.gender;
  const height = props.height;
  const birth = props.birth;
  const picture = props.picture;

  return (
    <div className="IdCard">
      <div className="user">
        <div className="image">
          <img src={picture} alt="user-img" />
        </div>
        <div className="information">
          <p>First name:{firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Gender:{gender}</p>
          <p>Height:{height}</p>
          <p>Birth: {birth.toString().slice(0, 15)}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
