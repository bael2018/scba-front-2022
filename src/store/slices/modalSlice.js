import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: null,
    description: null,
    title: null,
    display: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.status = action.payload.status;
            state.description = action.payload.description;
            state.title = action.payload.title;
            state.display = true;
        },
        clearModal: (state) => {
            state.status = null;
            state.description = null;
            state.title = null;
            state.display = false;
        },
    },
});

export const { setModal, clearModal } = modalSlice.actions;
export default modalSlice.reducer;
