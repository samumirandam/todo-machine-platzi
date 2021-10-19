import React from "react";

import './TodoList.css'

const TodoList = ({children}) => {
  return (
    <section className="TodoList">
      <ul>{children}</ul>
    </section>
  );
};

export { TodoList };
