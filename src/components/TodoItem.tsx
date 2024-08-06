import React, { useEffect, useState } from "react";
import { useTodo } from "../Context/ToDoContext";

interface TodoItemProps {
  id: number;
  level: string;
  title: string;
  status: string;
  description: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  level,
  status,
  description,
}) => {
  const {
    deleteTask,
    numberTask,
    setNumberTask,
    isComplete,
    setIsComplete,
    updateTaskStatus,
  } = useTodo();

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    if (status === "done") {
      setIsComplete(isComplete + 1);
    }
  }, []);

  const toggleTaskStatus = () => {
    let newStatus;
    if (status === "todo") {
      newStatus = "doing";
    } else if (status === "doing") {
      newStatus = "done";
    } else {
      newStatus = "todo";
    }
    updateTaskStatus(id, newStatus);

    if (newStatus === "done") {
      setIsComplete(isComplete + 1);
    } else if (status === "done") {
      setIsComplete(isComplete - 1);
    }
  };

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const statusBgColor =
    status === "done"
      ? "bg-green-500"
      : status === "doing"
      ? "bg-blue-500"
      : "bg-orange-500";

  return (
    <div className={`flex flex-col items-start justify-between mb-2 p-5 shadow border-slate-300 border rounded`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col space-y-3">
          <div className="font-semibold text-lg">{title}</div>
          {!isDescriptionVisible && (
            <span className="cursor-pointer" onClick={toggleDescriptionVisibility}>
             Show . . .
            </span>
          )}
          {isDescriptionVisible && (
            <div
              className="mt-2 text-sm text-gray-700 cursor-pointer"
              onClick={toggleDescriptionVisibility}
            >
              {description}
            </div>
          )}
          <div className="space-x-2">
            <span
              className={` ${statusBgColor} p-1 text-white rounded cursor-pointer`}
              onClick={toggleTaskStatus}
            >
              {status}
            </span>
            <span>|</span>
            <span>{level}</span>
          </div>
        </div>
        <button
          className="bg-red-500 px-4 py-1 rounded text-white"
          onClick={() => {
            deleteTask(id);
            setNumberTask(numberTask - 1);
            if (status === "done") {
              setIsComplete(isComplete - 1);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
