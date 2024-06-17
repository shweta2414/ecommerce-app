// import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CardProductCard.scss';
import { addToCart, removeProduct, incrementQuantity, decrementQuantity } from '../redux/productReducer';
export const CartProductCard = ({ product, RemoveProductHandle }) => {
  const dispatch = useDispatch()
  const handleIncrement = (productId)=> {
    dispatch(incrementQuantity(productId))
  }
  const handleDecrement = (productId)=> {
    dispatch(decrementQuantity(productId))
  }
  // const RemoveProductHandle = (product_id)=> {
  //   dispatch(removeProduct(product_id));
  // }
  // useEffect(()=>{

  // })

  return (
    <div className="cart-product-card">
      <div className="cart-product-image">
        {product.images?<img src={product?.images[0]} alt={product?.name} /> : <img src={product?.image} alt={product?.name} />}
       
      </div>
      <div className="cart-product-details">
        <h3 >{product.title}</h3>
        <p className="cart-product-price">${product.price}</p>
        <div className="cart-buttons">
          <button className="delete-button" onClick={() => RemoveProductHandle(product.id)}>Delete</button>
          <button className="quantity-button" onClick={() => handleIncrement(product.id)}>+1</button>
          <button className="quantity-button" onClick={() => handleDecrement(product.id)}>-1</button>
          <div className="quantity">Quantity: {product.quantity}</div>
        </div>

      </div>
    </div>
  );
};


