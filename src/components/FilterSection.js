import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilters,applyFilters } from '../redux/productReducer';
import './filterSection.scss'
export const FilterSection = ()=> {
    const dispatch = useDispatch()
    const [filterData, setFilterdata] = useState([])
    const allProducts = useSelector((state)=> state.products.products) 
    const filteredProducts = useSelector((state)=> state.products) 
    const categories = [...new Set(allProducts.map(product => product.category.name))];
    const handleCheckboxChange = (category) => {
        setFilterdata(prevFilter=>{
            if(prevFilter.includes(category))
                return prevFilter.filter(item=> item!== category)
            else { return [...prevFilter, category]}
        })
       
    };
    useEffect(() => {
        dispatch(setFilters(filterData))
        dispatch(applyFilters());
      }, [filterData, dispatch]); 
    return (
        <div className="filter-section">
        <b> Filters</b>
         
         {categories && categories.map(category => (
                
                <div className="category-checkbox" key={category.category}>
                    <label>
                        <input
                            type="checkbox"
                            value={category}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        {category}
                    </label>
                </div>
            ))}
         
        </div>
    )
}