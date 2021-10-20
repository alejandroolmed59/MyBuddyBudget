import {createSlice} from '@reduxjs/toolkit'

const initialUpdateState = {
    update:false
}

const UpdateSlice = createSlice({
    name:'update',
    initialState: initialUpdateState,
    reducers:{
        toggle(state, action){
            state.update = !state.update
            console.log(state.update)
        }
    },
});

export const updateActions= UpdateSlice.actions;
export default UpdateSlice.reducer;