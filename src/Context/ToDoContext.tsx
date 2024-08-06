import { createContext, ReactNode, useContext, useState } from "react";
// Define type
interface Task {
  id: number;
  level: string;
  title: string;
  status: string;
  description: string;
}
interface ToDoContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  isFormVisible: boolean;
  toggleFormVisibility: () => void;
  numberTask: number;
  setNumberTask: React.Dispatch<React.SetStateAction<number>>;
  isComplete: number;
  setIsComplete: React.Dispatch<React.SetStateAction<number>>;
  updateTaskStatus: (id: number, status: string) => void;
}

export const ToDoContext = createContext<ToDoContextProps | undefined>(
  undefined
);

// ToDoContextProvider
interface ToDoContextProviderProps {
  children: ReactNode;
}

export const ToDoContextProvider: React.FC<ToDoContextProviderProps> = ({
  children,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const [tasks, setTask] = useState<Task[]>([]);
  //add task
  const addTask = (task: Task) => {
    setTask((prev) => [...prev, task]);
  };
  //delete task
  const deleteTask = (id: number) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
  };
  //count number task
  const [numberTask, setNumberTask] = useState<number>(0);

  //count complete task
  const [isComplete, setIsComplete] = useState<number>(0);

  //Update status when click task
  const updateTaskStatus = (id: number, status: string) => {
    setTask(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  return (
    <ToDoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        isFormVisible,
        toggleFormVisibility,
        numberTask,
        setNumberTask,
        isComplete,
        setIsComplete,
        updateTaskStatus,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(ToDoContext);
  if (context === undefined) throw new Error("Error");
  return context;
};