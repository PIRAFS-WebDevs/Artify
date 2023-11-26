import React, { useEffect, useState } from 'react';

const getcart = () => {
    const [totalCartItem , setTotalCartItem] = useState([])
    useEffect(()=> {
        (async() => {
            const cart = await GetDataCart()
            console.log(first)
            setTotalCartItem(cart)

        })();
        
    },[])
    
};

export default getcart;