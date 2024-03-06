import { useState,useRef } from 'react'
import { useRoutes } from 'react-router-dom'

import { Home } from './components/Home/Home';
import { HomeEnglish } from './components/HomeEnglish/HomeEnglish';
import { NotFound } from './components/NotFound/NotFound';


const AppRoutes = () => {
  let routes = useRoutes ([
    { path:"/", element: <Home />},
    { path:"/HomeEnglish", element: <HomeEnglish />},
    { path:"/*", element: <NotFound />},
  ])
  return routes
}

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
