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
import { deleteCurrentSession } from './appwrite/utils';

function App() {
  const [todos, setTodos] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [isSearchActive, setIsSearchInput] = useState(false)
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

  const handleSearch = async (e, query) => {
    e.preventDefault();
    setIsSearchInput(true)
    console.log('search called');
    try {
      // Check is search working for task or not
      const res = await axios.get(`/search?q=${query}`)
      setTodos(res.data.todo)
      console.log(res.data.todo);
    } catch (error) {
      console.log(error.message);
    }
  }

  const searchClose = (e) => {
    e.preventDefault()
    setIsSearchInput(false)
    getTodos()
    setSearchInput("")
  }

  const handleSort = async (e, order) => {
    try {
      const res = await axios.get(`/gettodosbyorder?q=${order}`)
      setTodos(res.data.todos)
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className="App bg-[#03203C] pt-4 flex items-center justify-center flex-col border-2">



      <Switch>
        <Route path="/todos" exact>
          {cookies.get('token') ? (
            <>
              <div class="shadow bg-white w-full bg-transparent">
                <div class="h-16 mx-auto px-5 flex items-center justify-between">
                  <p class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Todo</p>

                  <ul class="flex items-center gap-5">
                    <li>
                      <div id="task-input" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent w-full">
                        <form className="relative text-lg bg-transparent text-white w-full" onSubmit={(e) => handleSearch(e, searchInput)} >
                          <div className="flex items-center  py-2">
                            <input className="bg-transparent border-none mr-3 px-2  focus:outline-none" type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                              <i className="fa fa-search text-white" aria-hidden="true"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li>
                      <div className="order-btns">
                        <button className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500" onClick={(e) => { handleSort(e, "asc") }} >
                          <i className="fa-solid fa-sort-up"></i>
                        </button>
                        <button href="#" className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500" onClick={(e) => { handleSort(e, "dsc") }}>
                          <i className="fa-solid fa-sort-down" ></i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <button className="border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit" onClick={(e) => { handleSignOut(e) }} color="white" >Sign Out</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <TodoForm createTodo={createTodo} />
              {/* Search option */}
              <div className={` ${isSearchActive ? "flex" : "hidden"}  flex-row justify-between items-center bg-white p-6 border rounded-md antialiased   text-slate-700`}>
                <div>
                  <h1 className="text-3xl font-medium">Search Result</h1>
                </div>
                <div className="inline-flex space-x-2 items-center ml-12">
                  <button href="#"
                    className="p-2 border border-red-200 rounded-md inline-flex space-x-1 items-center bg-red-600 hover:bg-red-500"
                    onClick={(e) => { searchClose(e) }}
                  >
                    <i className="fa-solid fa-times text-white" ></i>
                  </button>
                </div>
              </div>
              <TodoList todos={todos} getTodos={getTodos} />

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
