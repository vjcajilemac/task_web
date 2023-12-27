
import { Navigate, Routes, Route } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>

    </Routes>
  )
}
