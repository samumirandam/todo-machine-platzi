import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

import "./TodoItem.css";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onCompleted={onComplete} />
      <p className={`TodoItem__p ${completed && "TodoItem__p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
};

export { TodoItem };
