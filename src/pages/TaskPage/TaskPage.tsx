import React, { useEffect } from 'react'
import TaskLayout from '../../layout/TaskLayout'
import { TaskList } from '../../components'
import {TaskInterface} from '../../interfaces/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './TaskPage.css'

const TaskPage = () => {
  const taskArrayData: TaskInterface[] =[
    {id:1, name:"Crear Componentes", due_date:"18/12/2023", observation:"", status:{name:"cumplido", color:"blue"}},
    {id:2, name:"Crear Backend", due_date:"18/12/2023", observation:"", status:{name:"activo", color:"green"}}];
    useEffect(() => {
      Hello()
    }, [])
    
    const Hello = () =>{
        console.log('asd')
    }
  return (
    <TaskLayout>
      <div className='task_content__container'>
        <div className='task_content__tittle'>
        <FontAwesomeIcon icon={faList} /><h1>Tareas</h1>
        </div>      


        <TaskList taskList = {taskArrayData}></TaskList>
       
      </div>
 
    </TaskLayout>

  )
}
export default TaskPage