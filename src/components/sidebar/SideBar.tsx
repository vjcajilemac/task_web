import { useEffect } from "react"
import { TaskInterface } from "../../interfaces/Task"

const SideBar = ({taskList}:any) => {
  useEffect(() => {
    console.log(taskList, "taskList")
    
  }, [])
  
  return (

    <div className="row flex-nowrap h-100 w-100">
        <div className="col-12 col-md-12 col-xl-12 px-sm-0 px-0 bg-light h-100 w-100">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-h-100 h-100 w-100 ">
                <h3>Lista de Tareas</h3>
                <ol>
                  {taskList&&taskList.length>0?(
                    taskList.map((task:TaskInterface)=>(
                      <li style={{color:"black"}} key={task.id}>{task.name}</li>
                    ))
                  ):(<>No s eha encontrado valores</>)}
                
                </ol>

            </div>
        </div>

    </div>

  )
}
export default SideBar
