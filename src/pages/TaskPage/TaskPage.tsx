import React, { useEffect, useState } from 'react'
import TaskLayout from '../../layout/TaskLayout'
import { TaskList } from '../../components'
import {TaskInterface} from '../../interfaces/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './TaskPage.css'
import { ApiGet } from '../../helpers/apiHelpers'

const TaskPage = () => {
  
  const [state, setState] = useState({
    tasks:[],
    searchString:"",
    
  })
  const {tasks, searchString} = state;
  
    useEffect(() => {
      initData()
    }, [])

    useEffect(() => {
      // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
      
      const timeout = setTimeout(() => {
        initData();
      }, 2000);
      console.log()
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    },  [searchString])

    const handlerSearchString = (ev:any) =>{
      
      setState({...state, searchString: ev.target.value});

    }
    const initData = async () =>{
      const dataResponse = await ApiGet(`tasks?searchString=${searchString}`);
      setState({...state, tasks: dataResponse});
      console.log("response", dataResponse)
    }
  return (
    <TaskLayout taskList = {tasks} handlerSearchString={handlerSearchString} searchString={searchString}>
      <div className='task_content__container'>
        <div className='task_content__tittle'>
        <FontAwesomeIcon icon={faList} /><h1>Tareas</h1>
        </div>      


        <TaskList taskList = {tasks}></TaskList>
       
      </div>
 
    </TaskLayout>

  )
}
export default TaskPage