import React, { useContext, useEffect, useState } from 'react';
import getPhotos from '../helpers/getPhotos';
import getUsers from '../helpers/getUsers';
import { ContextItem } from '../Context/ContextItem'
import { ContextVisibility } from '../Context/ContextVisibility';

export const DetallesLista = () => {

    //use context
    const {item} = useContext(ContextItem)
    console.log(item)
    const {visible:stateII, setVisible:setStateII} = useContext(ContextVisibility);

    const [photo, setPhoto] = useState({
        albumId: "",
        id: "",
        title: "",
        url: "",
        thumbnailUrl: ""
      });
    const [user, setUser] = useState({
        id: "",
        name: "",
        username: "",        
        phone: "",
        website: ""        
        });

    /*Photos */
    const updatePhotos = () =>{
        getPhotos()
            .then((newPhotos)=>{
                if(item.id!==""){
                const photoS = newPhotos.find(itemP => itemP.albumId === item.id);
                //console.log(newPhotos[0]);
                setPhoto({
                    albumId: "",
                    id: "",
                    title: "",
                    url: photoS.url,
                    thumbnailUrl: ""
                  })
                //console.log(album);
                //console.log(photo.url);
            }
            })
    }
    useEffect(() =>{
        updatePhotos();
    },[item]);
    /*Users*/ 
    const updateUsers = () =>{
        getUsers()
            .then((newUsers)=>{
                if(item.userId!==""){
                    const userS = newUsers.find(itemU => itemU.id === item.userId);
                    //console.log(newPhotos[0]);
                    setUser({
                        id: userS.id,
                        name: userS.name,
                        username: userS.username,        
                        website: userS.website        
                        })
                    //console.log(album);
                    //console.log(user);
                }
            })
    }    
    useEffect(() =>{
        updateUsers();
    },[item]);

    const lista=()=>{
        setStateII(true);
    }

    return (        
        <>
            <h1>Detalles...</h1> 
            <b>Título:</b> {item.title}<br/>
            <b>URL:</b>{photo.url}<br/>
            <b>Nombre usuario:</b> {user.name}<br/>
            <b>username:</b> {user.username}<br/>
            <b>Web site:</b> {user.website}<br/>
            <img src={photo.url} alt={photo.url} width="25%"/><br/>
            <input type="button" onClick={lista} className="btn btn-primary" value="Lista"/>
        </>     
    )
}
