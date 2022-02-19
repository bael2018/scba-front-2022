import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    id: null,
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.isAuth = true;
        },
        removeUser: state => {
            state.email = null;
            state.id = null;
            state.isAuth = false
        },
        setAuthStatus: state => {
            state.isAuth = true;
        },
        removeAuthStatus: state => {
            state.isAuth = false;
        }
    }
})

export const { removeAuthStatus , setAuthStatus , setUser , removeUser } = authSlice.actions
export default authSlice.reducer