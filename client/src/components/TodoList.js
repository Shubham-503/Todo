import React from 'react'

const TodoList = ({ todos }) => {
  console.log(todos)
  return (
    <div className='todoList'>
      {todos && todos.map(todo => {
        console.log(">>>>", todo)
        return <div className="">
          <h2>{todo.title}</h2>
          {todo.tasks && todo.tasks.map((task) => {
            return <p>{task}</p>
          })}
          <div className="tasks">

          </div>
        </div>
      })}
      <h2>todo</h2>
      <div className="tasks">
        <p>task</p>
        <p>task</p>
      </div>
    </div>
  )
}

export default TodoList