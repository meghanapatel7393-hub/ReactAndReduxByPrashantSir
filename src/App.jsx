import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./TodoApp.css"; //this is used for Todo
// import Hello from "./Hello";
// import KgButton from "./KgButton";
// import Random from "./Random";

//this is called functional component
function App() {
  /*this is for todo app*/
  const todoItem = [
    { name: "Buy Milk", date: "4/10/2025" },
    { name: "Go to College", date: "4/10/2025" },
    { name: "Like This Video", date: "4/10/2025" },
  ];
  return (
    <>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItem} />
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
