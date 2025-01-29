import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo"; 
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "Like this Video",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
