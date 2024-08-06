import { useTodo } from "../Context/ToDoContext";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { tasks } = useTodo();
  return (
    <div className="overflow-scroll h-[580px] hide-scrollbar scroll-smooth">
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TodoList;
