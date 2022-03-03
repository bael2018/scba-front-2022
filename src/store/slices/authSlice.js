import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: null,
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.id = action.payload.id;
            state.isAuth = true;
        },
        removeUser: state => {
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