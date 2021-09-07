import { useState, useEffect } from "react"
// import { getProduct } from "/promises";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch ("./Products.json")
            .then (res=> res.json)
            .then (resp=>{
                setProduct(resp)
                setLoading(false)})
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
