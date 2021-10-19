import React from "react";

import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="TodosLoading__container">
      <span className="TodosLoading__complete-icon"></span>
      <p className="TodosLoading__text">Cargando TODOS...</p>
      <span className="TodosLoading__delete-icon"></span>
    </div>
  );
};

export { TodosLoading };
