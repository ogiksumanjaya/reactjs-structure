/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useAppDispatch, useAppSelector } from 'utils/customHooks/reduxHook'
import { increment } from 'redux/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncres = () => {
    dispatch(increment())
  }

  return (
    <div className="sm:container sm:mx-auto bg-bubble-gum">
      <h1 className="text-3xl font-bold underline text-white">Test Styling</h1>
    </div>
  )
}

export default App
