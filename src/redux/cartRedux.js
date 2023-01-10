import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            products: [],
            total: 0,
            quantity: 0
        },
        reducers: {
            addProduct: (state, action) => {
                    state.quantity += 1;
                    state.products.push(action.payload);
                    state.total += action.payload.price*action.payload.quantity;
            },
            removeProduct:(state, action)=>{
                state.quantity>0?state.quantity -=1:state.quantity=0;
                state.products.splice(action.payload.i,1);
                state.total>0?state.total-=action.payload.price*action.payload.quantity:state.total=0;
                // state.quantity=0;
                // state.total=0;
                //                 state.products=[];

            }
        },
    })
export const { addProduct,removeProduct } = cartSlice.actions
export default cartSlice.reducer