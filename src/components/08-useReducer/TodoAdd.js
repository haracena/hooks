import React, { Fragment } from "react";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length > 1) {
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      const action = {
        type: "add",
        payload: newTodo,
      };

      handleAddTodo(action);
      reset();
    }
  };

  return (
    <Fragment>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Tarea..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary btn-block"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </form>
    </Fragment>
  );
};

export default TodoAdd;
