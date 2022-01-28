import {createSlice} from '@reduxjs/toolkit';

const initUser = {
    email: null,
    id: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initUser,
    reducers: {
        setUser: (state , action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        removeUser: state => {
            state.email = null;
            state.id = null;
        }
    }
})

export const { setUser , removeUser } = authSlice.actions
export default authSlice.reducer