import React, { useContext } from "react";

import { TodoContext } from "../../Context";

import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleOnSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={handleOnSearchValueChange}
      value={searchValue}
    />
  );
};

export { TodoSearch };
