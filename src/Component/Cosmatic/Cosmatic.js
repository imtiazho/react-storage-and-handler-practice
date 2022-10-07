import React from 'react';
import { addToDb, removeItemFromDb } from '../Utilities/fakedb';
import './Cosmatic.css'

const Cosmatic = (props) => {
    const {name, price, id} = props.product;
    const addTocart = (id) => {
        addToDb(id)
    }
    const removeItem = (id) =>{
        removeItemFromDb(id)
    }
    return (
        <div className='product'>
            <h3>Product: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=> addTocart(id)}>Add to Cart</button>
            <button style={{margin: "10px"}} onClick={()=> removeItem(id)}>Remove It</button>
        </div>
    );
};

export default Cosmatic;