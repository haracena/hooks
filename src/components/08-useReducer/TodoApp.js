import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./todo.css";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);

    const action = {
      type: "delete",
      payload: todoId,
    };

    console.log(action);

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodoAction) => {
    dispatch(newTodoAction);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
