import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/conterSotre'

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
})

export default store
