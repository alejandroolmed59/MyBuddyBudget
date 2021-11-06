import {configureStore} from '@reduxjs/toolkit'
import UpdateReducer from './slice/updateSlice'
import {walletSlice} from './slice/walletsSlice'

const store = configureStore({
    reducer: {
        update: UpdateReducer,
        [walletSlice.reducerPath]: walletSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(walletSlice.middleware),
})

export default store;