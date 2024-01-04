
import { Navigate, Routes, Route } from 'react-router-dom'
import {SignupPage, SigninPage} from '../pages'
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<SigninPage/>}/>
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>

    </Routes>
  )
}
