import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannelList } from '../src/store/modules/channelStore'

function App() {
  const { channelList } = useSelector((state) => state.channel)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div>
      <h1>Redux與React-非同步狀態操作</h1>
      {channelList.map((item) => {
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )
}

export default App
