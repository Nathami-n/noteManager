import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Body, Header, PostPage } from './components'
import { ContextProvider } from './utils/ContextProvider.tsx'


const router = createBrowserRouter([{
  path: '/',
  element: (<App>
    <Header />
  </App>

  ),
  children:[{
    path:'/notes',
    element: <Body/>
  },
  {
    path: '/notes/:id',
    element:<PostPage/>
  }
]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
