import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState([])

  const [newTask , setNewTask] = useState('')

  const handleChange = (e) => {

    setNewTask(e.target.value);
    
  }

  const handleTask = () => {

      setTask([...task, newTask])
      setNewTask('')
  }

  const deleteTask = (index) => {

      const updatedTask = task.filter((a , i) => i!==index )
      setTask(updatedTask)
  }

  console.log(task);
  return (
    <div>
      <input type='text' placeholder='task' value={newTask} onChange={handleChange}/>
      <button onClick={handleTask}>Add</button>

      <ul>
        {task.map((task,index) => (
            <li key={index}>{task} <button onClick={() => deleteTask(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default App
