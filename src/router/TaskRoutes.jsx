import { Navigate, Routes, Route } from 'react-router-dom'
import {TaskPage} from '../pages/index'

export const TaskRoutes = () => {
  
  return (
    <Routes>
        <Route path="/" element = {<TaskPage/>}/>
        <Route path="/*" element = {<Navigate to ="/"/>} />

    </Routes>


  )
}
