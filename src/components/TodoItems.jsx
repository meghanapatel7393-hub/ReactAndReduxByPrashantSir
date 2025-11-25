import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
function TodoItems({ todoItems, onDeleteItems }) {
  return (
    <div className={style["items-container"]}>
      {todoItems.map((todo) => {
        return (
          <TodoItem
            todoDate={todo.date}
            todoName={todo.name}
            key={todo.name}
            onDeleteItems={onDeleteItems}
          />
        );
      })}
    </div>
  );
  // let items = props.items;
  // return <TodoItem todoDate={items.date} todoName={items.name} />;
}

export default TodoItems;
