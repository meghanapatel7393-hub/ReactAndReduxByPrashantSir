import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
function TodoItems({ todoItems }) {
  return (
    <div className={style["items-container"]}>
      {todoItems.map((todo) => {
        return (
          <TodoItem todoDate={todo.date} todoName={todo.name} key={todo.name} />
        );
      })}
    </div>
  );
  // let items = props.items;
  // return <TodoItem todoDate={items.date} todoName={items.name} />;
}

export default TodoItems;
