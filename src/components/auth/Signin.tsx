import { useAuth } from "../../composables/useAuth";
import { LoginUserDto } from "../../dto/LoginUserDto";
import { useForm } from "../../hooks/useForm";

const Signin = () => {
    const {signinUser} = useAuth();

    const [ formSignupValues, handleInputChange] = useForm({
       
        email:"",
        password:""
    });
  
    const {email, password }:LoginUserDto =formSignupValues;
  
    const handleOnSubmit=(event:any)=>{
        event.preventDefault();
        const signinUserDto = {
          email,
          password
        }
        signinUser(signinUserDto);
  
    }
  return (
    <form onSubmit={handleOnSubmit} className="col-12 col-md-10 col-lg-6">
      <h1 className='text-white'>Iniciar sesion de usuario</h1>

      <div className="form-group text-light pb-4">
          <label className="input">Email:</label>
          <input className="form-control form-control-lg" type="email" name="email" onChange={handleInputChange} value={email} placeholder="Email" required></input>
      </div>
      <div className="form-group text-light pb-4">
          <label className="input">Contraseña:</label>
          <input className="form-control form-control-lg" type="password" name="password" onChange={handleInputChange} value={password} placeholder="Contraseña" required></input>
      </div>

      <br/>
      
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}
export default Signin;