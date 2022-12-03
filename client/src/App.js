import './App.css';
import axios from 'axios'
import {
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import Cookies from 'universal-cookie';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import api from './api/api';
import {  deleteCurrentSession} from './appwrite/utils';

function App() {
  const [todos, setTodos] = useState("")
  const history = useHistory()
  const cookies = new Cookies();


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
  }, [])

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await deleteCurrentSession();
      cookies.remove('token')
    } catch (e) {
      console.log(e)
    }
    history.push('/login')
  }

  return (
    <div className="App bg-[#03203C] pt-4 flex items-center justify-center flex-col border-2">



      <Switch>
        <Route path="/todos" exact>
          {cookies.get('token') ? (
          <>
            <TodoForm createTodo={createTodo} />
            <TodoList todos={todos} getTodos={getTodos} />
            <button className="mt-5 absolute top-0 right-4  border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit" onClick={(e) => { handleSignOut(e) }} >Sign Out</button>
          </>
          ) : (
            <Redirect to="/login" />
          )}


        </Route>
        <Route path="/login" exact>
          <h1>login Page</h1>
          <LoginUser />
        </Route>
        <Route path="/register" exact>
          <RegisterUser />
        </Route>
        <Route path="/" exact>
          <Redirect to={'login'} />
        </Route>

      </Switch>
    </div>



  );
}

export default App;
