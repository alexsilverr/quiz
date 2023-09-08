// ButtonOpciones.js

import React from 'react';

const ButtonOpciones = ({ text, isSelected, isCorrect, onClick }) => {
 
  return (
    <button
      className={`option ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
      onClick={onClick}
      disabled={isSelected}
    >
      {text}
    </button>
  );
};

export default ButtonOpciones;
