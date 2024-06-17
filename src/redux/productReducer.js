import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[],
    filteredProducts: [],
    filters: {
        category: null,
        priceRange: [0, 1000],
    },
    cartProducts:[],
}
const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialState,
    reducers: {
        setInitialState: (state,action)=> {
          state.products = action.payload;
          state.filteredProducts = action.payload;
        },
        setFilters: (state,action)=> {
            state.filters.category = action.payload;
          },
        applyFilters: (state,action)=> {
            const {category, priceRange} = state.filters;
            if(category.length === 0)
                state.filteredProducts = state.products
            else {
                state.filteredProducts = state.products.filter(product=>{
                    return category.includes(product.category.name)
                   
                })
            }
        },  
        addToCart: (state,action) => {
            const product_id = action.payload 
            const selectedProduct = state.cartProducts.find(product=> {
               return product.id === product_id
            })
            if(selectedProduct){
                selectedProduct.quantity +=1;
            }
              
            else {
                const selectedProduct = state.filteredProducts.find(product => {
                   return product.id === product_id
                })
                state.cartProducts.push({ ...selectedProduct, quantity: 1 });
            }

        },
        incrementQuantity: (state,action) => {
                const product_id = action.payload;
                const existingProduct = state.cartProducts.find(product => product.id === product_id)
                if(existingProduct)
                    existingProduct.quantity += 1;
        },
        decrementQuantity: (state,action) => {
            const product_id = action.payload;
            const existingProduct = state.cartProducts.find(product => product.id === product_id)
            if( existingProduct.quantity === 1){
                state.cartProducts = state.cartProducts.filter(product =>
                    product.id !== product_id
        
                )
            }
            else
                existingProduct.quantity -= 1;
            
    },
        removeProduct: (state,action) => {
            const product_id = action.payload;
            state.cartProducts = state.cartProducts.filter(product =>
                product.id !== product_id
    
            )
            // return state.cartProducts
        }
    }
})
export const { setInitialState,setFilters,applyFilters,addToCart,removeProduct,incrementQuantity,decrementQuantity } = productsSlice.actions;
export default productsSlice.reducer;
