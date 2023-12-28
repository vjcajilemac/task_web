import React from 'react'
import { TaskInterface } from '../../interfaces/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ({taskItem}:any) => {
  return (
    <div className='task__container row align-items-center justify-content-between px-0 mx-0'>
      <div className='h-100 d-flex col-2 justify-content-around align-items-center px-0 mx-0 '>
        <div className='task__status__circle p-0 m-0' style={{backgroundColor:taskItem.status.color}}>
          

        </div>
        <div className='p-0 m-0' style={{color:taskItem.status.color}}>
          {taskItem.status.name}

        </div>
        
      </div>
      <div className='h-100 d-flex row col-8 justify-content-start align-items-between '>
        <div className='task_info__header d-flex row w-100 p-0 m-0 bg-primary '>
          <h4>{taskItem.name}, {taskItem.due_date}</h4>
        </div>
        <div className='task_info__observation d-flex row w-100 p-0 m-0 bg-success'>
          <p>
            {taskItem.observation}
          </p>

        </div>

      </div>
      <div className='h-100 d-flex col-2 justify-content-center align-items-center '>
        <button type="button" className="btn btn-outline-danger"><FontAwesomeIcon size='lg' icon={faTrash} /></button>
      </div>
        

    </div>
  )
}
export default Task