import { useContext } from 'react';
import { ContextNombre } from '../Context/ContextNombre'


export const Formulario = () => {

    //const [formState, setFormState] = useState({nombre:"",correo:"",cometarios:""})
    
    //consumir context
    const {datos:formState,setDatos:setFormState} = useContext(ContextNombre)
        
    //const {nombre,correo}=formState;

    //[]computar string
    const hadleNameChange=({target})=>{
        setFormState({...formState,nombre:target.value})        
    }

    const hadleMailChange=({target})=>{
        setFormState({...formState,correo:target.value})
    }

    const hadleCommetsChange=({target})=>{
        setFormState({...formState,comentarios:target.value})
    }

    const hadleSubmit=(e)=>{
        e.preventDefault();//que no haga postback
        console.log(formState);
    }    

    return (
        <form onSubmit={hadleSubmit}>
            <h1>Ejemplo de formulario</h1>
            <div className="mb-3">
                <label htmlFor="txtnombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="txtnombre" nombre="nombre" value={formState.nombre} onChange={hadleNameChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="txtcorreo" className="form-label">Correo</label>
                <input type="text" className="form-control" id="txtcorreo" nombre="correo" value={formState.correo} onChange={hadleMailChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="txtcomentarios" className="form-label">Comentarios</label>
                <textarea type="text" className="form-control" id="txtcomentarios" nombre="comentarios" value={formState.comentarios} onChange={hadleCommetsChange}/>
            </div>
            <input type="submit" value="submit" className="btn btn-primary"/>
        </form>
    )
}
