import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/layout/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
