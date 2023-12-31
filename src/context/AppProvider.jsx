import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';

import { appTypes } from '../types/types';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }
}


export const AuthProvider = ({ children }) => {
    
  const [ authState, dispatch ] = useReducer( appReducer, {}, init );

  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }
    const action = { type: appTypes.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) );

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: appTypes.logout };
    dispatch(action);
  }


  return (
    <AppContext.Provider value={{
      ...authState,

      // Methods
      login,
      logout,
    }}>
        { children }
    </AppContext.Provider>
  );
}
