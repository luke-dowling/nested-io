interface TodoProps {
  todo: ITodo;
}

export const Todo = ({ todo }: TodoProps) => {
  return <div>{todo.text}</div>;
};
