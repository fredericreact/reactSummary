import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewPost from './components/NewPost'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, 
  children: [
    {path: '/', element: <App/>},
    {path: '/create-post', element: <NewPost/>}
  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
