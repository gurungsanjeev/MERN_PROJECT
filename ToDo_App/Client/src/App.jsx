import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';
import MyCalendar from './Components/MyCalendar';
import { Flex, Progress } from 'antd';
import { DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;
import Home from './Home';





getLocalStorageData();

function App() {
 
  const [task, setTask] = useState("")
  const [list, setList] = useState(() => getLocalStorageData())
  const [editIndex, setEditIndex] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Store the edited task text
  const [projectName, setProjectName] = useState('')
  const [total, setTotal] = useState(list.length)
  const [completed, setCompleted] = useState(list.filter((item) => item.completed).length);



  // for date selection
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = e => {
    SetPlacement(e.target.value);
  };






  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    setLocalStorageData(newList); // Save updated list in local storage
    setTotal(total - 1);
  };



  const handleAdd = () => {
    if (task.trim() !== "") { // Check if input is not empty
      setList([...list, { task, projectName: projectName }]); // Add the new task to the list
      setTask(""); // Clear the input field
      setTotal(total + 1);
    }
    else (alert("Your data is empty"))
  }
  /// todo local storage
  setLocalStorageData(list);





  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(list[index].task);  // Assuming you want to edit the task text
  };

  const handleStatus = (index) => {
    const newList = list.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
    setCompleted(newList.filter((item) => item.completed).length);
    setLocalStorageData(newList);
  };


  return (
    <>
      <div className="main-container bg-blue-500 h-screen w-full">

        <div className="heading">
          <h1 className="text-white text-center text-4xl font-bold pt-7">ToDo List</h1>
        </div>

        <div className="details flex justify-center text-center mt-4 w-full items-center flex-wrap">
          <div className="Project-Option  mr-2">

            <select value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              id="" className='bg-white text-black p-1 rounded-lg'>
              <option value="">Select Project</option>
              <option value="FA">FA</option>
              <option value="REDAA">REDAA</option>
              <option value="DARWIN">DARWIN</option>
              <option value="ICIMOD">ICIMOD</option>
            </select>
          </div>








          <div className="inputfield" >
            <input
              type="text"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border border-gray-400 px-2 py-1 w-lg sm:w-2xl min-w-l : bg-white rounded-lg"
            />

            <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold" onClick={handleAdd}>Add</button>
          </div>
        </div>

        <div className="total-task text-center text-white flex gap-6 justify-center mt-4">
          <div className='bg-gray-500 p-1 rounded-md px-2'>Total list: {total}</div>
          <div className='bg-red-500 p-1 rounded-md px-2'>Incompleted List: {total - completed}</div>
          <div className='bg-green-700 p-1 rounded-md px-2'>Completed List: {completed}</div>
        </div>




        <ol className="task-list  m-6 h-max" id="tasklist">
          {list.length > 0 ? (
            list.map((item, index) => {
              return (
                <li key={index} className='p-2 pt-4 mt-4 bg-white justify-between items-center rounded-lg flex-col'>
                  <div className="title-date">

                    <span className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-3xl mr-2'>
                      {item.projectName}
                    </span>
                    <span>
                      <RangePicker placement={placement} />
                    </span>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    {item.task}

                    <span>
                      <button
                        className="bg-blue-400 text-white px-2 py-1 ml-2 rounded-lg"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-500 text-white px-2 py-1 ml-2 rounded-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-gray-500 text-white px-2 py-1 ml-2 rounded-sm"
                        onClick={() => handleStatus(index)}
                      >
                        Incomplete
                      </button>

                    </span>
                  </div>
                </li>


              );
            })
          ) : (
            <h1 className="text-center text-white font-semibold text-xl">No tasks available</h1>
          )}
        </ol>


      </div>
      <Home/>
      
     
    </>
  )
}

export default App
