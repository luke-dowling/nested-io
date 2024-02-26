import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <TodoForm />
        <Todos />
      </main>
    </>
  );
}

export default App;
