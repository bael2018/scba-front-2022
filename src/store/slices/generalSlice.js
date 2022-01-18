import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
    name: 'currency',
    initialState: {
        currency: false,
        search: false
    },
    reducers: {
        changeCurrency: state => {
            state.currency = !state.currency
        },
        setSearchModal: state => {
            state.search = !state.search
        }
    }
})

export const { 
    changeCurrency, 
    setSearchModal 
} = generalSlice.actions
export default generalSlice.reducer