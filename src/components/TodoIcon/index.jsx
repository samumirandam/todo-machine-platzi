import React from "react";

import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

import "./TodoIcon.css";

const TodoIcon = ({ type, color = "gray", onClick }) => {
  const iconTypes = {
    check: (color) => (
      <CheckSVG className="Icon__svg Icon__svg--check" fill={color} />
    ),
    delete: (color) => (
      <DeleteSVG className="Icon__svg Icon__svg--delete" fill={color} />
    ),
  };

  return (
    <span
      className={`Icon__container Icon__container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};

export { TodoIcon };
