import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* 
1.React Strict Mode:
  在開發環境中，React 的 Strict Mode
  會故意執行某些函數兩次，
  包括 Component 的渲染和 useEffect 的回調函數。
  這是 React 的設計，
  目的是幫助開發者發現潛在的副作用問題。
2.主要目的:
  幫助發現不純的渲染
  找出使用過時 API 的問題
  確保清理函數正確實現
*/
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
)
