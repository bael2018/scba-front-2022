import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: "Recommended",
    status: "Recommended",
    view: false,
    zoomImage: false,
    productId: "",
};

const productItemSlice = createSlice({
    name: "productItem",
    initialState,
    reducers: {
        setProductViewSmoll: (state) => {
            state.view = true;
        },
        setProductViewLarge: (state) => {
            state.view = false;
        },
        setZoomImage: (state) => {
            state.zoomImage = !state.zoomImage;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setProductId: (state, action) => {
            state.productId = action.payload.productId;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const {
    setProductId,
    setStatus,
    changeCurrency,
    setProductViewLarge,
    setProductViewSmoll,
    setPrice,
    setZoomImage,
} = productItemSlice.actions;
export default productItemSlice.reducer;
