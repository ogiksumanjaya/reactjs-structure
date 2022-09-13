import { lazy, Suspense } from 'react'
import { homeRoute, libraryComponentRoute } from 'constant/route'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const Homepage = lazy(() => import('./pages/Homepage'))
  const LibraryComponent = lazy(() => import('./pages/LibraryComponent'))

  const renderLoader = () => <p>Loading</p>
  return (
    <BrowserRouter>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path={homeRoute} element={<Homepage />} />
          <Route path={libraryComponentRoute} element={<LibraryComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
