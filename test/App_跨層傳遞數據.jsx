import { createContext,useContext } from 'react'
import './App.css'

const msgContext = createContext()

function A() {
  return (
    <div>
      this is A Conponent
      <B/>
    </div>
  )
}

function B() {
  const msg = useContext(msgContext)
  
  return (
    <div>
      {msg}
      this is B Conponent
    </div>
  )
}

function App() {

  return (
    <msgContext.Provider value={'hello'}>
      <div>
        this is APP Conponent
        <A></A>
      </div>
    </msgContext.Provider>
    
  )
}

export default App
