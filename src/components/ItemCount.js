import { useState } from 'react';


function ItemCount (){
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(9)
    
    const plusClick = ()=>{
        stock > 0 ? setCount(count + 1) : setCount (count)
        stock > 0 ? setStock( stock -1 ) : setCount (count)
    }

    const lessClick = ()=>{
        count  < 1 ? setCount (count * 0) : setCount (count- 1)
        count > 0 ? setStock( stock  + 1 ) : setStock (stock)
    }

    return (
            <div className ="counterButtons">
                <span className=" margins "> Stock = {stock} </span>
                <button className="sum-or-rest-Button margins" onClick={lessClick}>-</button>
                <span className=" margins "> {count} </span>
                <button className="sum-or-rest-Button margins" onClick={plusClick}>+</button>
            </div>
        ) 
}

export default ItemCount;