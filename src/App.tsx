import Footer from "./components/pages/footer/Footer";
import Header from "./components/pages/header/Header";
import Main from "./components/pages/main/Main";
import { ToDoContextProvider } from "./Context/ToDoContext";
function App() {
  return (
    <>
      {/* //Step 2 Wrap provider with App */}
      <ToDoContextProvider>
        <div className="flex flex-1 flex-col gap-10 justify-center items-center h-screen bg-slate-50">
          <Header />
          <Main />
          <Footer />
        </div>
      </ToDoContextProvider>
    </>
  );
}

export default App;
