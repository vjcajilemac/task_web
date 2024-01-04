import React from 'react'
import { useForm } from '../../hooks/useForm';
import { RegisterUserDto } from '../../dto/RegisterUserDto';
import { useAuth } from '../../composables/useAuth';
const Signup = () => {
  const {signupUser} = useAuth();

  const [ formSignupValues, handleInputChange] = useForm({
      first_name:"",
      last_name:"",
      username:"",
      email:"",
      password:""
  });

  const {first_name, last_name, username, email, password }:RegisterUserDto =formSignupValues;

  const handleOnSubmit=(event:any)=>{
      event.preventDefault();
      const signupUserDto = {
        first_name,
        last_name,
        username,
        email,
        password
      }
      signupUser(signupUserDto);

  }

  return (
    <form onSubmit={handleOnSubmit} className="col-12 col-md-10 col-lg-6">
      <h1 className='text-white'>Registrar usuario</h1>
      <div className="form-group text-light pb-4">
          <label className="input">Nombre:</label>
          <input className="form-control form-control-lg" type="text" name="first_name" onChange={handleInputChange} value={first_name} placeholder="Nombre" required></input>
      </div>
      <div className="form-group text-light pb-4">
          <label className="input">Apellido:</label>
          <input className="form-control form-control-lg" type="text" name="last_name" onChange={handleInputChange} value={last_name} placeholder="Apellido" required></input>
      </div>
      <div className="form-group text-light pb-4">
          <label className="input">Usuario:</label>
          <input className="form-control form-control-lg" type="text" name="username" onChange={handleInputChange} value={username} placeholder="Usuario" required></input>
      </div>
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
export default Signup;