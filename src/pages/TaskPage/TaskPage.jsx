import React, { useEffect } from 'react'
import TaskLayout from '../../layout/TaskLayout'
import TaskList from '../../components/TaskList'
import './TaskPage.css'
const TaskPage = () => {
    useEffect(() => {
      Hello()
    }, [])
    
    const Hello = () =>{
        console.log('asd')
    }
  return (
    <TaskLayout>
      
        <h1>Tareas</h1>
        <TaskList></TaskList>
        
    </TaskLayout>

  )
}
export default TaskPage