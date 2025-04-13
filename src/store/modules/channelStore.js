import { createSlice } from '@reduxjs/toolkit'

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload
    },
  },
})

export const fetchChannelList = () => {
  return (dispatch) => {
    fetch('https://geek.itheima.net/v1_0/channels')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setChannelList(data.data.channels))
      })
      .catch((error) => {
        console.error('Error fetching channel list:', error)
      })
  }
}

export const { setChannelList } = channelStore.actions
export default channelStore.reducer
