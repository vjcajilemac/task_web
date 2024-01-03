
import { CreateTaskDto } from "../../dto/CreateTaskDto";
import { useForm } from "../../hooks/useForm"
import { useTask } from "../../composables/useTask";
const NewTask = ({handleChangeComponent}:any) => {
    const {createTask} = useTask(); 
    const [ formTaskValues, handleInputChange, handleChangeDate ] = useForm({
        name:"",
        date:"",
        observation:""
    });

    const {name, date, observation}:CreateTaskDto =formTaskValues;

    const handleOnSubmit=(event:any)=>{
        event.preventDefault();
        createTask({name:name, date:date,observation})
        handleChangeComponent("list")
        
    }
    return (
    <form onSubmit={handleOnSubmit} className="col-12 col-md-6">
        <div className="form-group text-light pb-4">
            <label className="input">Nombre de la tarea:</label>
            <input className="form-control form-control-lg" type="text" name="name" onChange={handleInputChange} value={name} placeholder="Nombre" required></input>
        </div>
        <div className="form-group text-light pb-4">
            <label className="input">Fecha de cumplimiento:</label>
            <input className="form-control form-control-lg" type="date" name="date" data-date-format="DD MMMM YYYY" onChange={handleChangeDate} value={date} placeholder="Fecha" ></input>
            
        </div>
        <div className="form-group text-light pb-4">
            <label className="input">Observaciones: </label>
            <input className="form-control form-control-lg" type="text" name="observation" onChange={handleInputChange} value={observation} placeholder="Observaciones"></input>
        </div>

        <br/>

        <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}
export default NewTask