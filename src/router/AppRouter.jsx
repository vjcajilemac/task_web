import { Route, Routes } from 'react-router-dom'
import { TaskRoutes } from './TaskRoutes' 
import { AuthRoutes } from './AuthRoutes'
import ProtectedRoute from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

export const AppRouter = () => {
  
  return (
    <Routes>
         <Route
          path="/auth/*"
          element={
            <UnprotectedRoute>
              <AuthRoutes />
            </UnprotectedRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <TaskRoutes />
            </ProtectedRoute>
          }
        />
    </Routes>
  )
}
/*<Route path="/*" element={<TaskRoutes/>} /> 
<Route path="/auth/*" element={<AuthRoutes/>}/>*/