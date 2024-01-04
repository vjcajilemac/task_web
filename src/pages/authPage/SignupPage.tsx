import React from 'react'
import AuthLayout from '../../layout/AuthLayout'
import Signup from '../../components/auth/Signup';

const SignupPage = () => {
  return (
    <AuthLayout>
      <div className='d-flex justify-content-center align-items-center col-11 col-md-10'>
        <Signup/>
      </div>
      
      
    </AuthLayout>
  )
}
export default SignupPage;