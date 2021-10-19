import React, { useContext } from "react";
import { TodoContext } from "../../Context";

import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};

export { CreateTodoButton };
