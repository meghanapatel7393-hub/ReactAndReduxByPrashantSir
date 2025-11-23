import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";

//this is called functional component
function App(){
return (
  <>
  <h1>Hello World</h1>
  <KgButton/>
  <Hello/>
  <Random/>
  <Random/>
  <Random/>
  </>
);
}

export default App;