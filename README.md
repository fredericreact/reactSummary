# React Summary

```javascript
npm run dev
```

```javascript
npm install react-icons
```

```javascript
react-router-dom
```

Start the backend server

```javascript
npm start
```


## React Router

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts'
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



```

```javascript

import MainHeader from "../components/MainHeader"
import {Outlet} from 'react-router-dom'
const RootLayout = () => {
    return <>
        <MainHeader/>
        <Outlet/>
    </>
}


export default RootLayout

```
