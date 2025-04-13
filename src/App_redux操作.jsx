import './App.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addNunber } from './store/modules/conterSotre'

function App() {
  // 用戶使用 useSelector 來獲取 Redux store 中的狀態
  const count = useSelector((state) => state.count.count)
  // 用戶使用 useDispatch 來發送 action 到 Redux store
  const dispatch = useDispatch()

  // 用戶使用 useDispatch 來發送 action 到 Redux store
  // useDispatch 是一個 hook，返回一個 dispatch 函數
  const useIncrement = () => {
    dispatch(increment())
  }

  const useDecrement = () => {
    dispatch(decrement())
  }

  const useAddNumber = () => {
    dispatch(addNunber(number))
  }

  const [number, setNumber] = useState(0)

  return (
    <div>
      <h1>Redux Toolkit</h1>

      {/* <button onClick={useAddNumber}>-10</button> */}
      <button onClick={useDecrement}>-1</button>
      {count}
      <button onClick={useIncrement}>+1</button>
      <button onClick={useAddNumber}>+{number}</button>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value))
        }}
        placeholder="請輸入數字"
      />
    </div>
  )
}

export default App
