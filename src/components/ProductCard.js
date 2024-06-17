import React from 'react';
import './ProductCard.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productReducer';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const addProductToCart = (product_id)=> {
    dispatch(addToCart(product_id))
  }
  return (
    <div className="product-card">
      {product.images?<img src={product?.images[0]} alt={product?.name} /> : <img src={product?.image} alt={product?.name} />}
      <h3>{product?.title}</h3>
      <p>${product?.price}</p>
      <button onClick={()=>addProductToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

