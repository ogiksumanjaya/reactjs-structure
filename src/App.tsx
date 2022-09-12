import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from 'utils/customHooks/reduxHook'
import { increment } from 'redux/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncres = () => {
    dispatch(increment())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={handleIncres}>Increment</button>
      </header>
    </div>
  )
}

export default App
