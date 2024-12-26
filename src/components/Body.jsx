import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {

    //Router
    const appRouter = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/browse', element: <Browse />},
    ])



  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

// https://assets.nflxext.com/ffe/siteui/vlv3/fe95548f-c421-4892-b01d-339893f85ac0/web_tall_panel/IN-en-20241223-TRIFECTA-perspective_c9dcbd72-bf01-471c-9931-05972cadfcac_large.jpg