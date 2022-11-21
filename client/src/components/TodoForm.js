import React, { useState } from 'react'

const TodoForm = ({createTodo}) => {
  const [title, setTitle] = useState("")

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    createTodo(title)

  }

  return (
    <div className="todoForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="todoinput">
          <input type="text" placeholder='Enter your Todo' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit">Create</button>
        </div>

      </form>
    </div>

  )
}

export default TodoForm