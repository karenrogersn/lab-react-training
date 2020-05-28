import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      className="card"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <span className="card-brand">{type}</span>
      <span className="card-number">{number.toString().slice(-4)}</span>
      <p className="expiration">
        Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
        <span className="bank-name">{bank}</span>
      </p>
      <span>{owner}</span>
    </div>
  );
};

export default CreditCard;
