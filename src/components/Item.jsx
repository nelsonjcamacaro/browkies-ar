import React from 'react'
import ItemCount from './ItemCount';

function Item ({item}){
    return (
        <div className="items" id="items">
            <img src={item.picture} alt="producto" id={item.id} className="img-card item-card"/>
            <h2 className="item-card">{item.tittle}</h2>
            <h3 className="item-card">{item.price}</h3>
            <ItemCount/>
        </div>
    )
}

export default Item;