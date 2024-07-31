import { createSlice } from "@reduxjs/toolkit";

// Step3. Create state slice with createSlice function and add initial state

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["burger", "pizza"],
    },
    // reducer functions corresponding to each actions
    reducers: {
        // action: reducerFunction() => {}
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});

// export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;