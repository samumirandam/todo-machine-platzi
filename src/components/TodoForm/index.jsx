import React, { useState, useContext } from "react";

import { TodoContext } from "../../Context";

import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setNewTodoValue("");
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div className="TodoForm__button-container">
        <button
          type="button"
          className="TodoForm__button TodoForm__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm__button TodoForm__button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
