import './App.css';
import axios from 'axios'
import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import api from './api/api';

function App() {
  const [todos, setTodos] = useState("")

  const history = useHistory()

  const createTodo = async (title) => {
    try {
      const res = await axios.post('/createtodo', { title })
      console.log(res)
      getTodos()

    } catch (error) {
      console.log(error.message);
    }
  }

  const getTodos = async () => {
    try {
      const res = await axios.get('/gettodos')
       setTodos(res.data.todos)
      console.log(todos);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getTodos()
  },[])
  
  const handleSignOut = async (e)=> {
    e.preventDefault()
    try {
      await api.deleteCurrentSession();
    } catch (e) {
      console.log(e)
    }
    history.push('/login')
  }

  return (
    <div className="App bg-[#b3b3b3] pt-4 flex items-center justify-center flex-col border-2">
      


      <Switch>
          <Route path="/" exact>
            <TodoForm createTodo={createTodo} />
            <TodoList todos={todos} getTodos={getTodos} />
        <button className="mt-5  border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit" onClick={(e)=>{handleSignOut(e)}} >Sign Out</button>

          </Route>
          <Route path="/login" exact>
           <h1>login Page</h1>
           <LoginUser/>
          </Route>
          <Route path="/register" exact>
            <RegisterUser/>
          </Route>
          
        </Switch>
    </div>



  );
}

export default App;
