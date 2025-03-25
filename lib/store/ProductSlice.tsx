"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductItem = {
    id: number,
    src: string,
    description: string,
    name: string,
    price: number,
}

type productState = {
    ProductItems: ProductItem[],
}

const initialState: productState = {
    ProductItems: []
}



const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductItem>) => {
            // checking if existing item exists.
            const existingItem = state.ProductItems.find(item => item.id === action.payload.id);
            console.log("slice", action.payload);

            if (!existingItem) {
                state.ProductItems.push({ ...action.payload });
            }

            const productItem = state.ProductItems.find(item => item.id === action.payload.id);
            console.log("State" + productItem?.name);
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const itemIndex = state.ProductItems.findIndex(item => item.id === action.payload);

            state.ProductItems.splice(itemIndex, 1);
        }
    }
});


export const { addItem } = ProductSlice.actions;
export default ProductSlice.reducer;

