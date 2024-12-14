import { createSlice } from "@reduxjs/toolkit";

// create a slice for the counter state
const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0,
    },

    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// export actions so that they can be used in components
export const { increment, decrement, reset } = counterSlice.actions;

// export reducer to be used in the store
export default counterSlice.reducer;