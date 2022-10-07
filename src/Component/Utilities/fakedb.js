const addToDb = (id) =>{
    let shoppingCart;

    const stroedCart = localStorage.getItem('shopping-cart')
    if(stroedCart){
        shoppingCart = JSON.parse(stroedCart)
    }
    else{
        shoppingCart = {}
    }

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeItemFromDb = (id) => {
    const stroedCart = localStorage.getItem('shopping-cart');
    if(stroedCart){
        const shoppingCart = JSON.parse(stroedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
    else{

    }
}

export {addToDb, removeItemFromDb}