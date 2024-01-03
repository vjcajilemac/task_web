
import { useState, useEffect } from 'react';
import { TaskInterface } from '../../interfaces/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useTask } from '../../composables/useTask';
import moment from 'moment';
const Task = ({taskItem}:any) => {
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
  const {deleteTask, completeTask} = useTask()
  useEffect(() => {
    const manejarCambioTamaño = () => {
      setAnchoVentana(window.innerWidth);
    };

    // Agregar un event listener para rastrear cambios en el tamaño de la ventana
    window.addEventListener('resize', manejarCambioTamaño);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', manejarCambioTamaño);
    };
  }, []);

  const onDeleteTask = () => {
    deleteTask(taskItem.id)
  }

  const onCompleteTask = () => {
    if(taskItem.status.name==="Terminado"){
      alert('La tarea ya ha sido terminada')
    }else{
      completeTask(taskItem.id)
    }
    
  }

  return (
    <div className='task__container row align-items-center justify-content-between px-0 mx-0' >
      <div className='h-100 d-flex col-2 justify-content-around align-items-center px-0 mx-0 ' onClick={onCompleteTask}>
        <div className='task__status__circle p-0 m-0' style={{backgroundColor:taskItem.status.color}}>
        </div>
        {anchoVentana>600&&(        
          <div className='p-0 m-0' style={{color:taskItem.status.color}}>
            {taskItem.status.name}

          </div>)}
      </div>
      <div className='h-100 d-flex row col-8 justify-content-center align-items-center' onClick={onCompleteTask}>
        <div className='task_info__header d-flex row w-100 p-0 m-0 '>
          <h4>{taskItem.name}, {moment(taskItem.due_date).format('YYYY-MM-DD')}</h4>
        </div>
        <div className='task_info__observation d-flex row w-100 p-0 m-0 '>
          <p>
            {taskItem.observation}
          </p>
        </div>
      </div>
      <div className='h-100 d-flex col-2 justify-content-center align-items-center '>
        <button type="button" className="btn btn-outline-danger" onClick={onDeleteTask}><FontAwesomeIcon size='lg' icon={faTrash} /></button>
      </div>
    </div>
  )
}
export default Task