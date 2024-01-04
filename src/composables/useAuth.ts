import {  ApiPost } from '../helpers/apiHelpers';
import { RegisterUserDto } from '../dto/RegisterUserDto';
import { LoginUserDto } from '../dto/LoginUserDto';

const useAuth = () => {
    const signupUser = async (registerUserDto:RegisterUserDto) => {
        const respTasks = await ApiPost(`auth/register`, registerUserDto);
        const loginUserDto: LoginUserDto = {
            email: registerUserDto.email,
            password: registerUserDto.password

        }
        signinUser(loginUserDto)  
        return respTasks;
    };
    const signinUser = async (loginUserDto:LoginUserDto) => {
        
        const respTasks = await ApiPost(`auth/login`, loginUserDto);
        alert(respTasks.token)
        if(respTasks&&respTasks.token){
            alert('Sesion iniciada')
            localStorage.setItem('token', respTasks.token)
            window.location.href="/"
        }
        return respTasks;
    };

    return {
        signupUser,
        signinUser
    };
}
export {useAuth}