import React from 'react';
import './CreateTodoButton.css';

// eslint-disable-next-line no-unused-vars
function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aquí se debería abrir el modal')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
