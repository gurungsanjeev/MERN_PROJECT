import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';




getLocalStorageData();

function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState(()=> getLocalStorageData())
  const [editIndex, setEditIndex] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Store the edited task text



 const handleAdd =()=>{
  if (task.trim() !== "") { // Check if input is not empty
    setList([...list, task]); // Add the new task to the list
    setTask(""); // Clear the input field
  }
  else(alert("Your data is empty"))
 }
/// todo local storage
setLocalStorageData(list);



 const handleDelete=(index)=>{
  const newList = list.filter((_, i) => i !== index); // Remove task at specific index
  setList(newList); // Update the list state
 }

 
  return (
    <>
      <div className="main-container bg-amber-200 min-h-screen w-full">
        
          <div className="heading">
            <h1 className="text-blue-500 text-center text-4xl font-bold mt-3">ToDo List</h1>
          </div>
      
          <div className="details flex justify-center text-center mt-4 w-full">
            <div className="inputfield" >
              <input
               type="text" 
               required 
               value={task}
               onChange={(e)=> setTask(e.target.value)}
               className="border border-gray-400 px-2 py-1 w-xl" /> 
               
              <button className="ml-2 bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>Add</button>
            </div>
          </div>
          <ol className="task-list bg-gray-400 m-6 h-max" id="tasklist">
              {list.map((task, index)=>{
              return(
                <li key={index} className='p-2 mt-2 bg-white flex justify-between items-center'>{task}
                <span>
                <button
                className="bg-blue-400 text-white px-2 py-1 ml-2"
                onClick={() => handleEdit(index)} // Pass index to delete specific task
                >
                Edit
              </button>

                 <button
                className="bg-red-500 text-white px-2 py-1 ml-2"
                onClick={() => handleDelete(index)} // Pass index to delete specific task
                >
                Delete
              </button>
              {/* <input type="date" /> */}
                </span>
                 </li>

                 
           
              )
                })}
            </ol>
        
      </div>
    </>
  )
}

export default App
