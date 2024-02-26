import { useTodosContext } from "../hooks/useTodosContext";
import { Todo } from "./Todo";

export const Todos = () => {
  const { todosState } = useTodosContext();
  return (
    <div>
      {todosState.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
