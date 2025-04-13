import { createSlice } from '@reduxjs/toolkit'

const conuntStore = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    addNunber: (state, action) => {
      state.count += action.payload
    },
  },
})

export const { increment, decrement, addNunber } = conuntStore.actions
export default conuntStore.reducer
