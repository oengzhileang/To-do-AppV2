import React, { useState, useRef } from "react";

import { useTodo } from "../Context/ToDoContext";

const TodoForm = () => {
  const inputref = useRef<HTMLInputElement>(null);
  const { addTask, setNumberTask, numberTask } = useTodo();

  const [task, setTask] = useState({
    id: Date.now(),
    level: "low ",
    title: "",
    status: "todo",
    description: "",
  });
  const [error, setError] = useState("");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title.trim() === "" || task.description.trim() === "") {
      setError("Title and Description are required.");
      return;
    } else {
      addTask(task);
      console.log(task);
      console.log("Add task successfully");
      setNumberTask(numberTask + 1);
    }
    setTask({
      id: Date.now(),
      level: "low",
      title: "",
      status: "todo",
      description: "",
    });
    setError("");
  };
  const handleClick = () => {
    inputref.current?.focus();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-xl" htmlFor="title">
            Title
          </label>
          <input
            className="border p-3 border-slate-300 rounded"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            ref={inputref}
            value={task.title}
            onChange={handleChange}
          />
          {error && <p className="text-red-500  text-sm italic">{error}</p>}
          <label htmlFor="level" className="font-semibold text-xl">
            Level
          </label>
          <select
            id="level"
            name="level"
            className="p-3 border border-slate-300 rounded"
            value={task.level}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label htmlFor="status" className="font-semibold text-xl">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="p-3 border border-slate-300 rounded"
            value={task.status}
            onChange={handleChange}
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <label htmlFor="description" className="font-semibold text-xl">
            Description
          </label>
          <textarea
            className="h-[120px] border border-slate-400 p-3 rounded"
            id="description"
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
          ></textarea>

          <button
            onClick={() => {
              handleClick();
            }}
            type="submit"
            className="bg-blue-500 p-3 text-white font-bold rounded "
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
