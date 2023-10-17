import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Route.jsx'
import Context from './Context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
        <RouterProvider router={routes}></RouterProvider>
    </Context>
  </React.StrictMode>,
)
