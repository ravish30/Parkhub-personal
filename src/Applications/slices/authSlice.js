import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    step1: {},
    step3: {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.isAuth = true
        },
        LogoutUser: (state, action) => {
            state.isAuth = false
        },
        Step1Data: (state, action) => {
            state.step1 = action.payload
        },
        Step3Data: (state, action) => {
            state.step3 = action.payload
        }
    }
})

export const { LoginUser, LogoutUser, Step1Data, Step3Data } = authSlice.actions
export default authSlice.reducer