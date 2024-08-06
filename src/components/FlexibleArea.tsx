import TodoForm from "./TodoForm";
const FlexibleArea = () => {
  const isQuote = "quote";
  const isCreate = "create";
  return (
    <>
      <div className="h-full overflow-auto">
        {isQuote && <span>Do your best</span>}
        {isCreate && <TodoForm/>}
      </div>
    </>
  );
};

export default FlexibleArea;
