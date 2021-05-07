import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {
  const[tasks, setTasks] = useState(    [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks (tasks.map( (task) => task.id === id ? {...task, reminder:!task.reminder}:task ))
      console.log(tasks[1].reminder)
    }

  return (
    <div className="container">
      <Header title='StudBud' />
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      
    </div>
  )
}

export default App;
