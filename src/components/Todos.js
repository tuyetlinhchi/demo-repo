import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
    { index: 1, title: "First todo item", completed: false },
    { index: 2, title: "Second", completed: false },
    { index: 3, title: "Third", completed: false },
  ]);

  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
