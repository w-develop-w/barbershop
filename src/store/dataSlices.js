import { createSlice } from "@reduxjs/toolkit";

const dataOfBarbershopSlice = createSlice({
    name: "dataOfBarbershop",
    initialState: {
        allServices: [],
    },
    reducers: {
        setAllServices: (state, action) => {
            state.allServices = action.payload;
        },
    },
});

export const { setAllServices } = dataOfBarbershopSlice.actions;
export default dataOfBarbershopSlice.reducer;
