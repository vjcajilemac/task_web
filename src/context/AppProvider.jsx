import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';
import { appTypes } from './types/appTypes';

const initialState = {
     tasks: [],
}

const init = () => {

  return {
    tasks: [],
  }
}


export const AppProvider = ({ children }) => {
    
  const [ appState, dispatch ] = useReducer( appReducer, initialState, init );

  const setTasksContext = ( taskArray = [] ) => {
    const action = { type: appTypes.setTasks, payload: taskArray }
    dispatch(action);
    
  }

  const getTasksContext = ( ) => {
    const action = { type: appTypes.getTasks }
    console.log("get task action", action)
    dispatch(action);

  }


  return (
    <AppContext.Provider value={{
      ...appState,
      // Methods
      setTasksContext,
      getTasksContext

    }}>
        { children }
    </AppContext.Provider>
  );
}
