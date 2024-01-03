import { appTypes } from './types/appTypes';

export const appReducer = ( state = {}, action ) => {


    switch ( action.type ) {

        case appTypes.setTasks:
            console.log('Settasks app reducer', action.payload )
            return {
                ...state,
                tasks: action.payload
            };
        case appTypes.getTasks:
            
            return {
                tasks: state.tasks,
            }

    
        default:
            return state;
    }

}

