import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import { TbWorldPin } from "react-icons/tb";

import { Header } from './components/Layouts/Header/Header'
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';





const AppRoutes = () => {
  let routes = useRoutes ([
    { path:"/", element: <Home />},
    { path:"/*", element: <NotFound />},
  ])
  return routes
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <div className="containerHeader">
          <h2>TurismCOL</h2>
          <h2>Explora colombia</h2>
          <div className="lenguageAndLogin">
            <div className="containerLenguage">
            <TbWorldPin />
            <div className="barSeparet"></div>
            <p className="lenguage">ES</p>
            </div>
            <p className='login'>Iniciar sesion</p>
          </div>
        </div>
      </Header>
      <AppRoutes />
    </>
  )
}

export default App
