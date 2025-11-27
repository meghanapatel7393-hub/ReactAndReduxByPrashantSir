import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./TodoApp.css"; //this is used for Todo
import WlcomeMessage from "./components/WlcomeMessage";
import AddTodoByForm from "./components/AddTodoByForm";
import AddTodoByuseRef from "./components/AddTodoByuseRef";
import TodoItemsContext from "./store/todo-items-store";
// import Hello from "./Hello";
// import KgButton from "./KgButton";
// import Random from "./Random";

//this is called functional component
function App() {
  const [items, setItems] = useState([]);

  /*this is for todo app*/
  // const todoItem = [
  //   { name: "Buy Milk", date: "4/10/2025" },
  //   { name: "Go to College", date: "4/10/2025" },
  //   { name: "Like This Video", date: "4/10/2025" },
  // ];
  const onAddItems = (name, date) => {
    //here both way work but second way is better way than first way because first way is called immutability and second way is called Functional update
    //setItems([...items, { name: name, date: date }]); //this things some times give wrong result when heavy data loading so solution is Functional update
    //better way is below
    setItems((currentValue) => [...currentValue, { name: name, date: date }]); //this way gives upto date result
    /*
    difference between both is that first one is called immutability and second one is called Functional update.

    */
  };
  const onDeleteItems = (name) => {
    console.log(name);
    setItems(items.filter((item) => item.name !== name));
  };
  return (
    <>
      {/*here we can conver value into object using {} when used context provider we does not need to pass data via props but here we have not remove props because for learning purpose props and context both are used - for learning purpose also not need to set OnDeleteItems and OnAddItems on component because its also done by context currently i have not remove from demo but its not need when define context*/
      /** one more things which items is changed to much frequently that is not good for performance with context because when data changed in context then all components are re-rendered */}
      <TodoItemsContext.Provider
        value={{
          items: items,
          onAddItems: onAddItems,
          onDeleteItems: onDeleteItems,
        }}
      >
        <center>
          <AppName />
          {/* <AddTodo onAddItems={(name, date) => onAddItems(name, date)} />  this way also working */}
          <AddTodo onAddItems={onAddItems} />
          <AddTodoByForm onAddItems={onAddItems} />
          <AddTodoByuseRef onAddItems={onAddItems} />
          {items.length === 0 && <WlcomeMessage />}
          <TodoItems
            todoItems={items}
            // onDeleteItems={(name) => onDeleteItems(name)}  /* this way also working */
            onDeleteItems={onDeleteItems}
          />
        </center>
      </TodoItemsContext.Provider>
    </>
  );

  /*this is basic working during learning 
  return (
    <>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <h1>Hello World</h1>
      <KgButton />
      <Hello />
      <Random />
      <Random />
      <Random />
    </>
  );
  */
}

export default App;
