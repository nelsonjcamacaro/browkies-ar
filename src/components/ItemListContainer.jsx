import React from 'react';
// import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'


function ItemListContainer({greeting="Bienvenido a la tienda de Browkies, donde encontraras los mejores sabores y aromas en forma de cookies y brownies"}){
    
    // const [items,setItems]= useState([])
    // const [error,setError]= useState (null);
    
    // const FetchApi = async ()=>{
    //     await fetch ('../Products.json')
    //     .then(response => response.json())
    //     .then (json => console.log(json) )
    //     .then(result=> {
    //         // setIsLoaded (true);
    //         setItems(result);
    //         },
    //     (error) => {setError(error)}
    //     )
    // }

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

    // useEffect(() => {
    //     FetchApi();
    // }, [])

    return(
        <>
            <div className="div-itemlistcontainer">
                <h1 className="h1-itemlistcontainer">{greeting}</h1>
            </div>
            < ItemList/>
        </>
    )
}

export default ItemListContainer;