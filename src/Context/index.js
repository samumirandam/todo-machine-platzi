import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();
const { Provider } = TodoContext;

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [searchedTodos, setSearchedTodos] = useState(todos);
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = searchedTodos.filter(
    (todo) => !!todo.completed
  ).length;
  const totalTodos = searchedTodos.length;

  useEffect(() => {
    setSearchedTodos(
      todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, todos]);

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
        setSearchValue,
        addTodo,
        completeTodo,
        deleteTodo,
        setOpenModal,
      }}
    >
      {children}
    </Provider>
  );
};

export { TodoContext, TodoProvider };
