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
  },
})

export const { increment, decrement } = conuntStore.actions
export default conuntStore.reducer
