/*https://www.youtube.com/watch?v=6lvI-gTF_X8 */
import React, { useState } from 'react';
import './App.css';
import { AppRouter } from './Componentes/AppRouter';
import { ContextNombre } from './Context/ContextNombre';
import { ContextItem } from './Context/ContextItem';
import { ContextVisibility } from './Context/ContextVisibility';
function App() {

    //estado del contexto
    const [datos, setDatos] = useState({nombre:"ana",correo:"ana@gmail.com",comentarios:"cometarios de ana"})
    const [item, setItem] = useState({userId:"",id:"",title:""})
    const [visible, setVisible] = useState(true)
    return ( 
        <>
            <ContextVisibility.Provider value={{visible, setVisible}}>
            <ContextItem.Provider value={{item,setItem}}>
                <ContextNombre.Provider value={{datos,setDatos}}>
                    <AppRouter/>
                </ContextNombre.Provider>
            </ContextItem.Provider>    
            </ContextVisibility.Provider>            
        </>
    );
}

//{{objeto}}
export default App;