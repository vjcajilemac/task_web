import { ApiDelete, ApiGet, ApiPatch, ApiPost } from "../helpers/apiHelpers";
import { AppContext } from "../context/AppContext";
import { useContext } from 'react';
import { CreateTaskDto } from "../dto/CreateTaskDto";

const useTask = () => {
  const { setTasksContext } = useContext( AppContext );
  const getTasks = async (searchString:string="") => {
    const respTasks = await ApiGet(`tasks?searchString=${searchString}`);
    setTasksContext(respTasks)
    return respTasks;

  };
  const createTask = async ({name, date, observation}:CreateTaskDto) => {
    const createTaskData ={
      name: name,
      due_date: date,
      observation:observation
    } 
    const respTasks = await ApiPost(`tasks`, createTaskData);
    getTasks()
    return respTasks;

  };

  const deleteTask = async (taskId:number)=>{
    const respTask = await ApiDelete(`tasks/${taskId}`);
    getTasks()
    return respTask
  }

  const completeTask = async (taskId:number) =>{
    const respTask = await ApiPatch(`tasks/${taskId}`);
    getTasks()
    return respTask
  }

  return {
    completeTask,
    getTasks,
    createTask,
    deleteTask
  };
};

export { useTask };