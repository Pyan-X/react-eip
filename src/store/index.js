import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/conterSotre'
import channelReducer from './modules/channelStore'

const store = configureStore({
  reducer: {
    count: counterReducer,
    channel: channelReducer,
  },
})

export default store
