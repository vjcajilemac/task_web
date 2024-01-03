import { TaskInterface } from '../../interfaces/Task'
import Task from './Task'
import './Task.css'
const TaskList = ({taskList}:any) => {
  return (
    <div className="task_list__container h-100">
      {taskList&&taskList.length>0?(
        taskList.map((taskItem:TaskInterface)=>(
          <Task key={taskItem.id} taskItem = {taskItem}></Task>


        ))
       
      ):(<>No se ha encontrado datos para mostrar</>)}
      
    </div>
  )
}
export default TaskList