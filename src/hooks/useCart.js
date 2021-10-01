import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) =>{
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        if(products.length){
            const saveCart = getStoredCart();
            const storedCart = [];
            
            for(const key in saveCart){
                const findItem = products.find(product => product.key === key);
                if(findItem){
                    const quantity = saveCart[key];
                    findItem.quantity = quantity;
                    storedCart.push(findItem);
                }
            }
            setCart(storedCart)
        }
    },[products]);
    return [cart,setCart];
}
export default useCart;