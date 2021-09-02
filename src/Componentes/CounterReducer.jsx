import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';
import { ContextItem } from '../Context/ContextItem';
import { ContextNombre } from '../Context/ContextNombre';

const initialState = {count:0};

// const action = {
//     type:'',
//     payload:null//carga útil
// }

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count +1};
        case 'decrement':
            return {count: state.count -1};
        case 'reset':
            return {count:initialState.count};
        default: throw new Error();//retorna el mismo estado return state;
    }
}

export const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState);

    //funciones por aparte
    // const increment=()=>{
    //     const action ={type: 'increment'};
    //     dispatch(action);
    // }
    // const decrement=()=>{
    //     const action ={type: 'decrement'};
    //     dispatch(action);
    // }
    // const reset=()=>{
    //     const action ={type: 'reset'};
    //     dispatch(action);
    // }

    //consumir context
    const {datos} = useContext(ContextNombre);
    const {item} = useContext(ContextItem);
    return (
        <div>
            <h3>{datos.nombre}</h3>
            <h3>{datos.correo}</h3>
            <h3>{datos.comentarios}</h3>
            <h3>{item.userId}</h3>
            <h3>{item.id}</h3>
            <h3>{item.title}</h3>
            <p>Count: {state.count}<br/></p>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>            
        </div>
    )
}
