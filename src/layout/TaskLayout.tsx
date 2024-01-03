import { useState, useEffect } from 'react';
import { Header, SideBar } from '../components';
import './TaskLayout.css'
const TaskLayout = ({children, taskList, searchString, handlerSearchString}:any) => {

  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  useEffect(() => {
    const manejarCambioTamaño = () => {
      setAnchoVentana(window.innerWidth);
    };
    console.log('taskList', taskList)

    // Agregar un event listener para rastrear cambios en el tamaño de la ventana
    window.addEventListener('resize', manejarCambioTamaño);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', manejarCambioTamaño);
    };
  }, []);

  return (
    <div className='layout'>
      <nav className='header_container'>
      <Header searchString={searchString} handlerSearchString={handlerSearchString}/>
      </nav>
      <div className='body_container  col-12'>
        {anchoVentana>600&&(
        <div className='sidebar_container container-fluid col-0 col-sm-2 col-md-4 col-lg-4'>
         <SideBar taskList = {taskList}/>
        </div>
        )}

        <div className='content_container col-11 col-sm-10 col-md-8 col-lg-8'>
        {children}
        </div>
      
      </div>


    
    </div>
    

  )
}

export default TaskLayout;