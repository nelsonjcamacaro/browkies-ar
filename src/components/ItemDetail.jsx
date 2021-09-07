import CookiesClasicas from "../assets/img/cookiesClasicas.jpeg"
import CookiesRellenas from "../assets/img/cookiesRellenas.jpeg"
import Brownies from "../assets/img/brownies.jpeg"
import DuoBox from "../assets/img/duoBox.jpeg"

function ItemDetail( props ) {
    const { product} = props
    return (
        <>
            <label>Soy el detalle</label>
            <div className= '...'>
                <div className="...">
                    <label>{product.tittle}</label>
                </div>
                <div className="...">
                    <img  src={product.picture} alt="imgProduct" className="..." />
                </div>
                <div className="...">
                    <label>{product.price}</label>
                </div>
            </div>
        </>
    )
}

export default ItemDetail