import React, { useCallback, useContext, useEffect, useState } from 'react'
import TaskLayout from '../../layout/TaskLayout'
import { TaskList, NewTask } from '../../components'
import {TaskInterface} from '../../interfaces/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusCircle, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import './TaskPage.css'
import { ApiGet } from '../../helpers/apiHelpers'
import { useTask } from '../../composables/useTask'
import { AppContext } from '../../context'

const TaskPage = () => {
  const appContextInstance = useContext( AppContext );
  const [state, setState] = useState({
    tasks:[],
    searchString:"",
    currentComponent : "list"
    
  })
  const {searchString, currentComponent} = state;
  const {getTasks}:any = useTask();

  const initData = async () =>{  
    const dataResponse = await getTasks(searchString);
    setState({...state, tasks: dataResponse});
    
  }
  useEffect(() => {
    initData()
  }, [])

    useEffect(() => {
      // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
      
        const timeout = setTimeout(() => {
          if(searchString){
            initData();

          }
          
        }, 2000);

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    },  [searchString])

    const handlerSearchString = (ev:any) =>{
      
      setState({...state, searchString: ev.target.value});

    }
    const handleChangeComponent = (string_component:string="list")=>{
      setState({...state, currentComponent: string_component})

    }
  return (
    <TaskLayout taskList = {appContextInstance.tasks} handlerSearchString={handlerSearchString} searchString={searchString}>
      <div className='task_content__container'>
        <div className='task_content__tittle d-flex col-12 col-sm-4 col-md-2  justify-content-between align-content-center'>
        <h1> <FontAwesomeIcon icon={faList} /> Tareas</h1>
        {currentComponent==="list"?(
        <button className='btn_add btn btn-primary' onClick={()=>handleChangeComponent("new_task")}> <FontAwesomeIcon size='lg' icon={faPlusCircle} /> </button>
        ):(
          <button className='btn_add btn btn-danger' onClick={()=>handleChangeComponent("list")}> <FontAwesomeIcon icon={faArrowLeftLong}/> </button>
        )}
        </div>
        {currentComponent==="list"?(
        <TaskList taskList = {appContextInstance.tasks}></TaskList>
        ):(
          <NewTask handleChangeComponent={handleChangeComponent}></NewTask>
        )}

      </div>
    </TaskLayout>
  )
}
export default TaskPage