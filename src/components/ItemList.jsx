import Item from "./Item";
import CookiesClasicas from "../assets/img/cookiesClasicas.jpeg"
import CookiesRellenas from "../assets/img/cookiesRellenas.jpeg"
import Brownies from "../assets/img/brownies.jpeg"
import DuoBox from "../assets/img/duoBox.jpeg"
import { useEffect, useState } from 'react'


const products = [
    {
        id: 1,
        tittle: "Cookies Clasicas",
        price: " 2$",
        picture: CookiesClasicas
    },
    {
        id: 2,
        tittle: "Cookies Rellenas",
        price: "2$",
        picture: CookiesRellenas
    },
    {
        id: 3,
        tittle: "Brownies",
        price: "4$",
        picture: Brownies
    },
    {
        id: 4,
        tittle: "Duo Box",
        price: "8$",
        picture: DuoBox
    }
]

let items = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve (products)
    }, 2000);
})



function ItemList(){
    // useEffect(() => {
    //     items()
    // }, [])

    const prod = products.map(item=><Item key={item.id} item={item}/>)
    return (
        <>
            <div>
                { prod }
            </div>
        </>
    )
}

export default ItemList;