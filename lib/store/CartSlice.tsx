"use client"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: number,
    src: string,
    description: string,
    name: string,
    price: number,
    quantity: number
}

type cartState = {
    cartItems: CartItem[],
    length: number,
    totalPrice: number
}
const initialState: cartState = {
    cartItems: [],
    length: 0,
    totalPrice: 0
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            // the price thing
            state.totalPrice += action.payload.price;
            // the length thing
            state.length++;
        },

        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);

            if (item && item?.quantity == 1) {
                state.cartItems.splice(itemIndex, 1);
            } else {
                item!.quantity--;
            }

            state.totalPrice -= item!.price;
            state.length--;
        }
    }
});


export const { addItemToCart } = CartSlice.actions;
export default CartSlice.reducer;