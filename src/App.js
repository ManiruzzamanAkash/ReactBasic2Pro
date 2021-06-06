
import React from "react";
import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/todo/TodoList';

const App = () => {
  
  return (
    <div className="app">
      <TodoList />
    </div>
  )
}

export default App;