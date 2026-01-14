import { TodosContext } from "../context/TodoContext"
import { useContext } from "react"

export const useTodosContext = () => useContext(TodosContext)
