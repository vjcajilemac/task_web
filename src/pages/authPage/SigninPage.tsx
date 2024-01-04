import Signin from "../../components/auth/Signin";
import AuthLayout from "../../layout/AuthLayout";

const SigninPage = () => {
  return (
    <AuthLayout>
    <div className='d-flex justify-content-center align-items-center col-11 col-md-10'>
      <Signin/>
    </div>
    
    
  </AuthLayout>
  )
}
export default SigninPage;