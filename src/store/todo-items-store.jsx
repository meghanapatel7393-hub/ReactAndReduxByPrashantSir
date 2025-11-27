import { createContext } from "react";
// const TodoItemsContext = createContext([]); // this way also work but below way is better because its suggest auto complete during typing
const TodoItemsContext = createContext({
  items: [],
  onDeleteItems: () => {},
  onAddItems: () => {},
});
export default TodoItemsContext;
