import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodosProvider } from "./context/TodoContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
