import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { CartProductCard } from "../components/CartProductCard"
import { removeProduct } from "../redux/productReducer"
export const Cart = ()=> {
    const dispatch = useDispatch()
    const allProducts = useSelector((state)=> state.products.cartProducts) 
    const sum=0;
    const totalPrice = allProducts.reduce((sum, product) => {
        return sum + product.price*product.quantity;
      }, 0);

    const RemoveProductHandle = (product_id)=> {
        dispatch(removeProduct(product_id));
      }

    return (
        <><div>{allProducts.map(product=> {
            return <CartProductCard product={product} RemoveProductHandle={RemoveProductHandle} />
     
        })}</div>
            
        <div><b>Grand Total: {totalPrice}</b></div>
        </>
    )
}