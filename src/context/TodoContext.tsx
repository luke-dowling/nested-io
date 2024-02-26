import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

interface TodosProivderProps {
  children: ReactNode;
}

const initialTodos: ITodo[] = [{ text: "something", completed: false }];

export const TodosContext = createContext<{
  todosState: ITodo[];
  dispatchTodo: Dispatch<TodoActions>;
}>({
  todosState: initialTodos,
  dispatchTodo: () => null,
});

export const TodosProvider = ({ children }: TodosProivderProps) => {
  const [todosState, dispatchTodo] = useReducer<Dispatch<TodoActions>, ITodo[]>(
    todosReducer,
    initialTodosd 


  const values = { todosState, dispatchTodo };

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};
