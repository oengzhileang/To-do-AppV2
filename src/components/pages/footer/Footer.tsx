import { useTodo } from "../../../Context/ToDoContext";
const Footer = () => {
  const { numberTask, isComplete } = useTodo();
  return (
    <>
      <footer className="max-w-[1200px] w-full">
        <div className="flex justify-between text-3xl font-bold">
          <div>
            <p>Total:{numberTask}</p>
          </div>
          <div>
            <p>Completed:{isComplete}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
