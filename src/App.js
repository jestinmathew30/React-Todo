import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Addtodo } from './MyComponents/Addtodo';
import { About } from './MyComponents/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  let initTodo;
 
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addtodo = (title) => {
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos, myTodo])
   
  }
  
  const [todos, setTodos] = useState(initTodo);
    

 
useEffect(() => {
 
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
  return (
    <>
    <Router>     
      <Header/>
      <Switch>
          <Route  exact path="/" render={()=>{
          return(
            <>
            <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      </>
          )
          }}>
          
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
        </Switch>
      
      <Footer />
      </Router>
 
    </>
  );
}

export default App;
