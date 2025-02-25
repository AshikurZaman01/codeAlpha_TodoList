import { useState } from "react";
import TodoForm from "./Components/Pages/TodoForm/TodoForm";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto py-6 px-4 min-h-screen flex flex-col items-center">

      <div className="w-full max-w-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Todos
          </h1>

          <button className="btn btn-md text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-105 transition-transform" onClick={() => setIsOpen(true)}>
            Add Todo
          </button>


        </div>
      </div>

      {/* Todo Form Modal */}
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <TodoForm closeModal={() => setIsOpen(false)} />
          </div>
        )
      }
      {/* Todo Form Modal */}


    </div>
  );
}

export default App;
