import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductItem = {
    id: number,
    src: string,
    description: string,
    name: string,
    price: number,
    quantity: string
}

type productState = {
    ProductItems: ProductItem[],
}

const initialState: productState = {
    ProductItems: []
}



const ProductSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductItem>) => {
            // checking if existing item exists.
            const existingItem = state.ProductItems.find(item => item.id === action.payload.id);

            if (!existingItem) {
                state.ProductItems.push({ ...action.payload });
            }
        }
    }
});


export const { addItem } = ProductSlice.actions;
export default ProductSlice.reducer;

