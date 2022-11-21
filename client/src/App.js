import './App.css';
import axios from 'axios'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const createTodo = async (title) => {
    try {
      const res = await axios.post('/createtodo', { title })
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="App">
      <TodoForm createTodo={createTodo} />
      <TodoList />
    </div>
  );
}

export default App;
