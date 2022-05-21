import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carArray: [],
    noOfBasements: null
}



export const parkSlice = createSlice({
    name: 'park',
    initialState,
    reducers: {
        SetCarArray: (state, action) => {
            state.carArray = action.payload
        },
        setTotalBasements: (state, action) => {
            state.noOfBasements = action.payload
        }
    }
})


export const { SetCarArray, setTotalBasements } = parkSlice.actions;
export default parkSlice.reducer