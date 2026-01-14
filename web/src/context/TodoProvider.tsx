import { ReactNode, useReducer } from "react"
import { todosReducer } from "./reducers/todosReducer"
import { TodosContext } from "./TodoContext"

interface TodosProviderProps {
  children: ReactNode
}

const initialTodos: ITodo[] = [{ text: "something", completed: false }]

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todosState, dispatchTodo] = useReducer(todosReducer, initialTodos)

  const values = { todosState, dispatchTodo }

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  )
}
