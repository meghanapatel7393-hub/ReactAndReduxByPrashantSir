import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./TodoApp.css"; //this is used for Todo
import WlcomeMessage from "./components/WlcomeMessage";
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
    setItems([...items, { name: name, date: date }]);
  };
  const onDeleteItems = (name) => {
    console.log(name);
    setItems(items.filter((item) => item.name !== name));
  };
  return (
    <>
      <center>
        <AppName />
        {/* <AddTodo onAddItems={(name, date) => onAddItems(name, date)} />  this way also working */}
        <AddTodo onAddItems={onAddItems} />
        {items.length === 0 && <WlcomeMessage />}
        <TodoItems
          todoItems={items}
          // onDeleteItems={(name) => onDeleteItems(name)}  /* this way also working */
          onDeleteItems={onDeleteItems}
        />
      </center>
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
