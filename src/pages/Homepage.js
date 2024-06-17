import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ProductCard } from "../components/ProductCard";
import { setInitialState } from '../redux/productReducer';
import { useSelector } from 'react-redux';
import { FilterSection } from '../components/FilterSection';
import { useNavigate } from 'react-router-dom';
import './Homepage.scss'; 

export const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {  
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                const data = response.data;
                dispatch(setInitialState((data)));
            } catch (error) {
                console.error("products not found");
            }
        };
        fetchProducts();
    }, [dispatch]);

    const allProducts = useSelector((state) => state.products.filteredProducts);
    const cartProducts = useSelector((state) => state.products.cartProducts);
    const cartCounterRef = useRef(cartProducts.length);

    useEffect(() => {
        cartCounterRef.current = cartProducts.length;
    }, [cartProducts]);

    return (
        <div className="homepage-container">
            <div className="header-container">
                <h1 className="title">Chor Bazar</h1>  
                <div className="cart-container">
                    <button className="cart-button" onClick={() => { navigate("/cart") }}>Cart</button>
                    <div className="cart-counter">Cart Count: {cartCounterRef.current}</div>
                </div>
            </div>
            <div className="main-content">
                <div className="filter-section-container">
                    <FilterSection />
                </div>
                <div className="product-container">
                    {allProducts && allProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
