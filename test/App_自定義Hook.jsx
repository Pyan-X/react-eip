import './App.css'
import { useState } from 'react'
/*
React使用規則
1.只能在組件或其他自定義Hook中調用Hook
2.只能在最上層調用Hook，不能在循環for、條件語句if或嵌套函數中調用Hook
3.只能在React函數組件中調用Hook，不能在普通的JavaScript函數中調用Hook
4.不能在class組件中調用Hook
5.不能在React組件的render方法中調用Hook
6.不能在React組件的constructor方法中調用Hook
*/

//自定義Hook
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => {
    setValue(!value)
    console.log('value', value)
  }

  return [value, toggle]
}

function App() {
  const [value, toggle] = useToggle(false)

  return (
    <div>
      <h6>自定義Hook</h6>
      <button onClick={toggle}>切換</button>
      <h2>當前狀態：{value && <div>this is alert</div>}</h2>
    </div>
  )
}

export default App
