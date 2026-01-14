export interface action {
  type: TodoActions
  payload?: ITodo | number
}

export const todosReducer = (state: ITodo[], action: action) => {
  switch (action.type) {
    case "ADD":
      if (typeof action.payload === "number") {
        return state
      } else {
        return [...state, action.payload!]
      }
    case "REMOVE":
      return state
    case "TOGGLE":
      return state
    default:
      return state
  }
}
