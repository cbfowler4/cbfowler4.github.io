import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
