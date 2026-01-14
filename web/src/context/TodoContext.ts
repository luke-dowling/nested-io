import { createContext } from "react"
import type { action } from "./reducers/todosReducer"

const initialTodos: ITodo[] = [{ text: "something", completed: false }]

export const TodosContext = createContext<{
  todosState: ITodo[]
  dispatchTodo: React.Dispatch<action>
}>({
  todosState: initialTodos,
  dispatchTodo: () => null,
})
