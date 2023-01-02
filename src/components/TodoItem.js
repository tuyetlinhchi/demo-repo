import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <li className="todo-item" key={todo.index}>
        {todo.title}
      </li>
    </div>
  );
};

export default TodoItem;
