import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import { AlbumLista } from './AlbumLista'
import { CounterReducer } from './CounterReducer'
import { Formulario } from './Formulario'
import NavBar from './NavBar'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={CounterReducer}/>
                <Route exact path="/formulario" component={Formulario}/>
                <Route exact path="/album" component={AlbumLista}/>
                <Route component={CounterReducer}/>
            </Switch>            
        </div>
        </BrowserRouter>
    )
}
