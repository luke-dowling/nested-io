interface ITodo {
  text: string;
  completed: boolean;
}

enum TodoActions {
  add = "ADD",
  remove = "REMOVE",
  toggle = "TOGGLE",
}
