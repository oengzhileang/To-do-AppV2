import React from "react";
import TodoForm from "../../TodoForm";
import TodoList from "../../TodoList";
import { useTodo } from "../../../Context/ToDoContext";

const Main: React.FC = () => {
  const { isFormVisible } = useTodo();
  return (
    <>
      <main className=" max-w-[1200px] w-full drop-shadow">
        <div className=" flex justify-between gap-5 items-center">
          <div className="max-w-[600px] w-full p-5 h-[600px] border border-slate-300 rounded ">
            {isFormVisible ? (
              <TodoForm />
            ) : (
              <div className="flex justify-center items-center text-center text-5xl h-full font-bold">
                Make any Todo!{" "}
              </div>
            )}
          </div>
          <div className="max-w-[600px] w-full p-5 h-[600px] border border-slate-300 rounded relative">
            {" "}
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
