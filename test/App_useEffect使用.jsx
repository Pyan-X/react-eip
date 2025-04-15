import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)

  // 1. 沒有依賴項目 初始+狀態更新都會執行
  // useEffect(() => {
  //   console.log('沒有依賴項目', count)
  // })

  // 2. 空陣列 只會在組件掛載時執行一次
  // useEffect(() => {
  //   console.log('空陣列', count)
  // }, [])

  // 3. 有依賴項目 只會在依賴項目改變時執行
  useEffect(() => {
    console.log('有依賴項目', count)
  }, [count])

  // const [list, setlist] = useState([])

  // useEffect(() => {
  //   const getList = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await res.json()
  //     setlist(data)
  //   }
  //   getList()
  // }, [])
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1)
        }}
      >
        {count}
      </button>
      {/* <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.id} - {item.title}
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default App
