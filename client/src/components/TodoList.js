import React, { useState } from 'react'


const TodoList = ({ todos }) => {

  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className='todoList flex flex-wrap border-2 justify-around m-4 p-4 border-2'>
      {todos && todos.map(todo => {
        console.log(">>>>", todo)
        return <div className="todo">
          <h2>{todo.title}</h2>
          <div className="tasks">
            {todo.tasks && todo.tasks.map((task) => {
              return <p>{task}</p>
            })}
          </div>
        </div>
      })}
      <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl'>todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button></div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl'>todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button></div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl'>todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div className='flex justify-between'>
            <span className='flex-1'>task</span>
            <div className="btns">
              <button className='mx-2'>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className='mx-2'>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TodoList