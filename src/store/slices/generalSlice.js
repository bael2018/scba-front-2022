import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: false,
    search: false
}

const generalSlice = createSlice({
    name: 'currency',
    initialState,
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