



function ItemListContainer({greeting="Bienvenido a la tienda de Browkies, donde encontraras los mejores sabores y aromas en forma de cookies y brownies"}){

    return(
        <div className="div-itemlistcontainer">
            <h1 className="h1-itemlistcontainer">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;