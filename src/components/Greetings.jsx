import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const { lang, children } = props;

  let message;
  switch (lang) {
    case 'de':
      message = 'Hallo';
      break;
    case 'en':
      message = 'Hello';
      break;
    case 'es':
      message = 'Hola';
      break;
    case 'fr':
      message = 'Bonjour';
      break;
    default:
      message = 'Olá';
  }
  return (
    <div>
      <p>
        {message} {children}
      </p>
    </div>
  );
};

export default Greetings;
