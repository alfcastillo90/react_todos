import React from 'react';
import './CreateTodoButton.css';

// eslint-disable-next-line no-unused-vars
function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={ onClickButton }
    >
      +
    </button>
  );
}

export { CreateTodoButton };
