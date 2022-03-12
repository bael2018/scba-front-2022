import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: null,
    description: null,
    title: null,
    display: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.state = action.payload.state;
            state.description = action.payload.description;
            state.title = action.payload.title;
            state.display = true;
        },
        clearModal: (state) => {
            state.state = null;
            state.description = null;
            state.title = null;
            state.display = false;
        },
    },
});

export const { setModal, clearModal } = modalSlice.actions;
export default modalSlice.reducer;
