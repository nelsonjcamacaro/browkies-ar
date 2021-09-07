

function ItemDetail( props ) {
    const { product} = props
    return (
        <>
            <label>Soy el detalle</label>
            <div className= '...'>
                <div className="...">
                    <label>{product.name}</label>
                </div>
                <div className="...">
                    <img  src={product.url} alt="imgProduct" className="..." />
                    <br/>
                    <label>{product.descripcion}</label>
                </div>
                <div className="...">
                    <label>{product.price}</label>
                </div>
            </div>
        </>
    )
}

export default ItemDetail