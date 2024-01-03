import { Route, Routes } from 'react-router-dom'
import { TaskRoutes } from './TaskRoutes' 
import { AuthRoutes } from './AuthRoutes'

export const AppRouter = () => {
  
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        <Route path="/*" element={<TaskRoutes/>} />

    </Routes>

  )
}
