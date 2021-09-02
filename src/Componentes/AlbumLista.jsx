import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DetallesLista } from './DetallesLista';
import { ContextItem } from '../Context/ContextItem'
import { ContextVisibility } from '../Context/ContextVisibility';

export const AlbumLista = () => {

    const [state, setstate] = useState({//todos los albums
        data:null,
        loading:true,
        error:null
    });
    //Consumir contexto
    const {setItem} = useContext(ContextItem)
    //
    const {visible:stateII, setVisible:setStateII} = useContext(ContextVisibility);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(({data})=>{
                setstate({
                    data,
                    loading:false,
                    error:null
                });
                //console.log(data);
            }) 
            .catch((err)=>{
                setstate({
                    data:[],
                    loading:false,
                    error:err
                });
                console.log(err);
        }); 
    },[]);   

    const detalles=(value)=>{  
        //console.log(value) 
        //
        
        setItem({userId:value.userId,id:value.id,title:value.title})
        //console.log(stateI);
        setStateII(false);
    }    

    return (

        (state.loading)?<>
            <div><b>Cargando</b></div>
        </>:

        (stateII)?
        <div>
            <h1>Lista...</h1>                
        <ol>  
            {                  
            state.data.map((ite)=>(
                <li key={ite.id}  ><b>Albúm {ite.id}:</b>
                <br /><b>Detalle: </b> {ite.title}
                <br />
                <form>
                <input type="button" value="Detalle" onClick={()=>detalles(ite)}
                className="btn btn-primary"
            />  </form>                          
            <hr /></li>                            
            ))
            }
        </ol>
        </div>:
        <DetallesLista/>
    )
}
