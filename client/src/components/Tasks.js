import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ModalComponent from './ModalComponent';


const Tasks = ({ tasks, id }) => {
  const [task1, setTask1] = useState([])
  const [taskInput, setTaskInput] = useState("")
  const [modalData, setModalData] = useState({
    id:"",
    title:"",
    text:"",
    isOpen:"",
    idx:""
  })

  const deleteTask = async (id, idx) => {
    const res = await axios.delete(`/deletetask/${id}/${idx}`)
    console.log(res)
    getTask(id)
  }

  const getTask = async (id) => {
    const res = await axios.get(`/gettasks/${id}`)
    console.log(res.data.task)
    setTask1(res.data.task)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("task creating for id: ", id,e)
    try {
      const res = await axios.post(`/createtask/${id}`,{task:taskInput});
    console.log(res.data.todo.tasks)
    setTask1(res.data.todo.tasks)
    setTaskInput("")
    } catch (error) {
      console.log(error);
    }
    
  }

  const modalSubmit = async (e,text,id,idx)=>{
    e.preventDefault()
    console.log('In modalSubmit')
    // IDX missing
    try {
      console.log(text,id,idx)
      const res = await axios.put(`/edittask/${id}/${idx}`,{task:text})
      console.log(res)
      getTask(id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTask1(tasks)
    // getTask(id)


  }, [])

  // console.log('tasks>>>', tasks)
  return (
    <div className="tasks relative left-4 border-2">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="todoinput  mt-4 flex items-center justify-between text-md">
          <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
        </div>
      </form>
      {task1 && task1.map((task, idx) => {
        return <div key={uuidv4()}>
          <span>{task}</span>
          <button className='mx-2' onClick={() => { setModalData({ title: "Edit Task", id: id, text: task, isOpen: true, idx:idx }) }} >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className='mx-2' onClick={() => deleteTask(id, idx)} >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      })}
      <ModalComponent modalData={modalData} setModalData={setModalData} modalSubmit={modalSubmit} />
    </div>

  )
}

export default Tasks 