import {configureStore} from '@reduxjs/toolkit'
import UpdateReducer from './slice/updateSlice'

const store = configureStore({
    reducer: {
        update: UpdateReducer
    } 
})

export default store;