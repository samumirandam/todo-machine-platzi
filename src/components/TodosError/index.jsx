import React from "react";

const TodosError = ({ error }) => {
  return (
    <section>
      <p>Peligro, hubo un error y anda suelto</p>
      <p>{error}</p>
    </section>
  );
};

export { TodosError };
