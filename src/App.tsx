/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useAppDispatch, useAppSelector } from 'utils/customHooks/reduxHook'
import { increment } from 'redux/counter/counterSlice'
import LibraryComponent from 'pages/LibraryComponent'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncres = () => {
    dispatch(increment())
  }

  return (
    <div>
      <LibraryComponent />
    </div>
  )
}

export default App
