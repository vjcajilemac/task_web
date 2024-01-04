import React, { useEffect, useState } from 'react'
import './AuthLayout.css'

const AuthLayout = ({children}:any) => {

  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
  useEffect(() => {
    const manejarCambioTamaño = () => {
      setAnchoVentana(window.innerWidth);
    };

    // Agregar un event listener para rastrear cambios en el tamaño de la ventana
    window.addEventListener('resize', manejarCambioTamaño);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', manejarCambioTamaño);
    };
  }, []);

  return (
    <div className='auth_layout'>
      <div className='auth___container d-flex col-12 p-0 m-0'>
        {anchoVentana>600&&(
          <div className='image_container d-flex col-6'>

          </div>
        )}

        <div className='d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-6 col-lg-6 m-0'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default AuthLayout;