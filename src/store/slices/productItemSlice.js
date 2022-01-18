import { createSlice } from "@reduxjs/toolkit";

export const productItemSlice = createSlice({
    name: 'productItem',
    initialState: {
        maxPrice: '',
        minPrice: '',
        price: 'recommended',
        view: false,
        zoomImage: false
    },
    reducers: {
        setMaxPrice: (state , action) => {
            state.maxPrice = action.payload.max
        },
        setMinPrice: (state , action) => {
            state.minPrice = action.payload.min
        },
        setProductViewSmoll: state => {
            state.view = true
        },
        setProductViewLarge: state => {
            state.view = false
        },
        setZoomImage: state => {
            state.zoomImage = !state.zoomImage
        },
        setPrice: (state , action) => {
            state.price = action.payload.price
        }
    }
})

export const {
    changeCurrency,
    setMaxPrice,
    setMinPrice,
    setProductViewLarge,
    setProductViewSmoll,
    setPrice,
    setZoomImage
} = productItemSlice.actions
export default productItemSlice.reducer