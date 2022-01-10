import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
          {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
