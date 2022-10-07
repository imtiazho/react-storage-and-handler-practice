import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';
import { getTotal } from '../Utilities/Calculate';

const Cosmatics = () => {
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://products.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    const total = getTotal(products)
    return (
        <div>
            <h2>Welcome to my cosmatics shop</h2>
            <h4>Total: {total}</h4>
            {
                products.map( product => <Cosmatic key={product.id} product={product}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;