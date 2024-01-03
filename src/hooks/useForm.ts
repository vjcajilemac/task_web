import { useState } from 'react';
 import moment from 'moment';

export const useForm = ( initialState:any={}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleChangeDate = ({target}:any) => {
        console.log(target.name, target.value)
        const newDate = moment(target.value).format('DD/MM/YYYY');
        setValues({
            ...values,
            [ target.name ]: target.value
        });
        console.log("ND", newDate); //value picked from date picker
    };
    const handleInputChange = ({ target }:any) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, handleChangeDate, reset ];

}