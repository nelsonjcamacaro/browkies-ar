import { useState, useEffect } from "react"
// import { getProduct } from "/promises";
import ItemDetail from "./ItemDetail";
import CookiesClasicas from "../assets/img/cookiesClasicas.jpeg"
import CookiesRellenas from "../assets/img/cookiesRellenas.jpeg"
import Brownies from "../assets/img/brownies.jpeg"
import DuoBox from "../assets/img/duoBox.jpeg"

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch ("./Products.json")
            .then (res=> res.json)
            .then (resp=>{
                setProduct(resp)
                setLoading(false)
                console.log("dentro del fecth");
                console.log(resp);})
    }, [])

    console.log(product);

    return (
        <>
            {loading ? 
                    <h2>Cargando Productos...</h2>
                : 
                    <ItemDetail product={ product } />
            }
        </>
    )
}

export default ItemDetailContainer
