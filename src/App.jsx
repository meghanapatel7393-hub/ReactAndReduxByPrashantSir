import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./TodoApp.css"; //this is used for Todo
import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";

//this is called functional component
function App() {
  /*this is for todo app*/
  return (
    <>
      <center>
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem />
        </div>
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
