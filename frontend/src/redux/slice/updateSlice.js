import {createSlice} from '@reduxjs/toolkit'

const initialUpdateState = {
    update:false,
    updateWallets:false
}

const UpdateSlice = createSlice({
    name:'update',
    initialState: initialUpdateState,
    reducers:{
        toggle(state, action){
            state.update = !state.update
            console.log(state.update)
        },
        toggleWallets(state){
            state.updateWallets = !state.updateWallets
        }
    },
});

export const updateActions= UpdateSlice.actions;
export default UpdateSlice.reducer;