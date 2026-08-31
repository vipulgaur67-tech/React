import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/ToDoItem1";
import TodoItem2 from "./components/ToDoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}
export default App;
